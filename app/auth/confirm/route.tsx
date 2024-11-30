import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;

  if (code) {
    const supabase = createClient();
    const {
      data: { session },
      error,
    } = await supabase.auth.exchangeCodeForSession(code);

    if (session?.user) {
      // Include userId in the redirect URL
      return NextResponse.redirect(
        `${origin}/${session.user.id}/plantation/select-plan`
      );
    }

    // Handle error case
    if (error) {
      console.error("Auth error:", error);
      return NextResponse.redirect(`${origin}/login?error=auth`);
    }
  }

  // Fallback redirect if no code or session
  return NextResponse.redirect(`${origin}/login`);
}
