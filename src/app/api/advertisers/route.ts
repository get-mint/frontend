import { NextResponse } from "next/server";

import { createAdminClient } from "@/lib/supabase/server/server";

export async function GET(request: Request) {
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
        network: network_id (*)
      `
    )
    .eq("domain", domain)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!data) {
    return NextResponse.json(
      { error: "No matching advertiser found" },
      { status: 404 }
    );
  }

  return NextResponse.json(data.network);
}
