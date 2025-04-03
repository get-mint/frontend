import { NextResponse } from "next/server";

import { createAdminClient } from "@/lib/supabase/server/server";
import { handleApiError } from "@/lib/utils/errors";

import { getRakutenToken } from "../token";

export async function GET(request: Request) {
  try {
    const { access_token: accessToken } = await getRakutenToken();

    const response = await fetch(
      "https://api.linksynergy.com/events/1.0/transactions",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch events: ${response.statusText}`);
    }

    const data = await response.json();

    const supabase = createAdminClient();

    return NextResponse.json(data);
  } catch (error) {
    const { error: errorMessage, code, status } = handleApiError(error);

    return NextResponse.json({ error: errorMessage }, { status });
  }
}
