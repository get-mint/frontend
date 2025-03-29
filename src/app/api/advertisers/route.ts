import { NextResponse } from "next/server";

import { createAdminClient } from "@/lib/supabase/server/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const domain = searchParams.get("domain");

    if (!domain) {
      return NextResponse.json(
        { error: "Domain parameter is required" },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();

    const { data, error } = await supabase
      .from("advertisers")
      .select(
        `
        *,
        networks (*)
      `
      )
      .eq("domain", domain)
      .maybeSingle();

    if (error) {
      throw error;
    }

    if (!data) {
      return NextResponse.json(
        { error: "No matching advertiser found" },
        { status: 404 }
      );
    }

    return NextResponse.json(data?.networks[0]);
  } catch (error) {
    console.error("Error fetching advertiser:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
