import { createClient } from "@/lib/supabase/server/server";
import { NextResponse } from "next/server";

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
      return NextResponse.redirect(new URL("/auth/error", requestUrl.origin));
    }

    const { error: profileError } = await supabase
      .from("users")
      .insert({
        id: session.user.id,
      })
      .select()
      .single();

    if (profileError) {
      console.error("Error creating user profile:", profileError);
      return NextResponse.redirect(new URL("/auth/error", requestUrl.origin));
    }

    return NextResponse.redirect(new URL("/auth/login", requestUrl.origin));
  }

  return NextResponse.redirect(new URL("/auth/error", requestUrl.origin));
}
