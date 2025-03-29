import { NextResponse } from "next/server";

import { sha256 } from "js-sha256";

import { createAdminClient } from "@/lib/supabase/server/server";
import {
  ValidationError,
  NotFoundError,
  handleApiError,
} from "@/lib/utils/errors";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url, email } = body;

    if (!url || !email) {
      throw new ValidationError("Product URL and email are required");
    }

    const domain = new URL(url).hostname;

    const supabase = createAdminClient();

    const { data: advertiser, error } = await supabase
      .from("advertisers")
      .select(
        `
        *,
        network: networks (*)
      `
      )
      .eq("domain", domain)
      .maybeSingle();

    if (error) {
      throw error;
    }

    if (!advertiser) {
      throw new NotFoundError(`No advertiser found for domain: ${domain}`);
    }

    if (advertiser.network.name !== "Rakuten Advertising") {
      throw new ValidationError(
        "Only Rakuten Advertising network is supported at this time"
      );
    }

    const trackingId = sha256(email.trim().toLowerCase());

    const baseUrl = new URL(request.url).origin;
    const response = await fetch(`${baseUrl}/api/networks/rakuten-advertising/link`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
        advertiser_id: advertiser.metadata.mid,
        u1: trackingId,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to create deep link");
    }

    const data = await response.json();
    return NextResponse.json({
      url: data.advertiser.deep_link.deep_link_url,
      response: data,
    });
  } catch (error) {
    const { error: errorMessage, code, status } = handleApiError(error);
    return NextResponse.json({ error: errorMessage, code }, { status });
  }
}
