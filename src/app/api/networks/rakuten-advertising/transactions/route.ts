import { NextResponse } from "next/server";

import { createAdminClient } from "@/lib/supabase/server/server";
import { getRakutenToken } from "../token";
import { handleApiError } from "@/lib/utils/errors";

export async function GET(request: Request) {
  try {
    const supabase = createAdminClient();

    const { data: network, error: networkError } = await supabase
      .from("networks")
      .select("*")
      .eq("name", "Rakuten Advertising")
      .single();

    if (networkError) throw networkError;
    if (!network) throw new Error("Rakuten network not found");

    const token = await getRakutenToken();
    if (!token) throw new Error("Failed to get Rakuten token");

    const now = new Date();
    const startDate = network.transactions_last_updated_at
      ? new Date(network.transactions_last_updated_at)
      : new Date(now.getTime() - 24 * 60 * 60 * 1000); // 24 hours ago

    const formatDate = (date: Date) => date.toISOString().split("T")[0];
    const processDateStart = formatDate(startDate);
    const processDateEnd = formatDate(now);

    const url = new URL("https://api.linksynergy.com/events/1.0/transactions");
    const params = new URLSearchParams({
      process_date_start: processDateStart,
      process_date_end: processDateEnd,
      limit: "1000",
      page: "1",
      type: "all",
    });
    url.search = params.toString();

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Rakuten API error: ${response.statusText}`);
    }

    const data = await response.json();
    const transactions = data.transactions || [];

    for (const transaction of transactions) {
      // Find user by tracking_id (u1)
      const { data: user, error: userError } = await supabase
        .from("users")
        .select("id")
        .eq("tracking_id", transaction.u1)
        .single();

      if (userError && userError.code !== "PGRST116") {
        // PGRST116 is "no rows returned"
        console.error(
          `Error finding user for tracking_id ${transaction.u1}:`,
          userError
        );
        continue;
      }

      // Find advertiser by network advertiser ID
      const { data: advertiser, error: advertiserError } = await supabase
        .from("advertisers")
        .select("id, currency_id")
        .eq("network_id", network.id)
        .eq("metadata->>network_advertiser_id", transaction.advertiser_id)
        .single();

      if (advertiserError && advertiserError.code !== "PGRST116") {
        console.error(
          `Error finding advertiser for ID ${transaction.advertiser_id}:`,
          advertiserError
        );
        continue;
      }

      // Insert or update transaction
      const { error: upsertError } = await supabase
        .from("user_transactions")
        .upsert(
          {
            network_id: network.id,
            user_id: user?.id || null,
            advertiser_id: advertiser?.id,
            currency_id: advertiser?.currency_id,
            tracking_id: transaction.u1,
            sale_amount: parseFloat(transaction.sale_amount),
            total_commission: parseFloat(transaction.commission),
            transaction_status: transaction.status.toUpperCase(),
            metadata: {
              network_transaction_id: transaction.transaction_id,
              product_name: transaction.product_name,
              order_id: transaction.order_id,
              process_date: transaction.process_date,
              transaction_date: transaction.transaction_date,
            },
          },
          {
            onConflict: "network_id,tracking_id,network_transaction_id",
          }
        );

      if (upsertError) {
        console.error(
          `Error upserting transaction ${transaction.transaction_id}:`,
          upsertError
        );
      }
    }

    // Update network's last_updated_at
    const { error: updateError } = await supabase
      .from("networks")
      .update({ transactions_last_updated_at: now.toISOString() })
      .eq("id", network.id);

    if (updateError) {
      console.error("Error updating network last_updated_at:", updateError);
    }

    return NextResponse.json({
      success: true,
      processed: transactions.length,
    });
  } catch (error) {
    return handleApiError(error);
  }
}
