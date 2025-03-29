import { NextResponse } from "next/server";

import { sha256 } from "js-sha256";

import { createClient, createAdminClient } from "@/lib/supabase/server/server";
import {
  AuthenticationError,
  ConflictError,
  handleApiError,
} from "@/lib/utils/errors";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = await createClient();

    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.exchangeCodeForSession(code);

    if (sessionError || !session?.user?.id) {
      console.error("Error exchanging code for session:", sessionError);
      throw new AuthenticationError("Failed to exchange code for session");
    }

    if (!session.user.email) {
      throw new AuthenticationError("No email found in session");
    }

    const supabaseAdmin = createAdminClient();

    const { error: profileError } = await supabaseAdmin
      .from("users")
      .insert({
        id: session.user.id,
        tracking_id: sha256(session.user.email.trim().toLowerCase()),
      })
      .select()
      .single();

    if (profileError) {
      console.error("Error creating user profile:", profileError);
      if (profileError.code === "23505") {
        throw new ConflictError("User profile already exists");
      }
      throw new AuthenticationError("Failed to create user profile");
    }

    return NextResponse.redirect(new URL("/auth/login", requestUrl.origin));
  }

  throw new AuthenticationError("No authentication code provided");
}

export async function POST(request: Request) {
  try {
    return await GET(request);
  } catch (error) {
    const { error: message, status } = handleApiError(error);
    return NextResponse.json({ error: message }, { status });
  }
}
