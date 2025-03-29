import { NextResponse } from "next/server";

import { ValidationError, handleApiError } from "@/lib/utils/errors";

import { getRakutenToken } from "../token";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url, advertiser_id, u1 } = body;

    if (!url || !advertiser_id || !u1) {
      throw new ValidationError("URL, advertiser_id, and u1 are required");
    }

    const { access_token } = await getRakutenToken();

    const response = await fetch(
      "https://api.linksynergy.com/v1/links/deep_links",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          authorization: `Bearer ${access_token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          url,
          advertiser_id,
          u1,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to create deep link");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    const { error: errorMessage, code, status } = handleApiError(error);
    return NextResponse.json({ error: errorMessage, code }, { status });
  }
}
