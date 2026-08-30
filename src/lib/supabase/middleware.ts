import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { getSupabaseEnv } from "@/lib/env";

export interface CookieToSet {
  name: string;
  value: string;
  options?: CookieOptions;
}

/**
 * Updates and refreshes Supabase auth session tokens in Next.js middleware.
 */
export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const { url, anonKey } = getSupabaseEnv();

  const supabase = createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet: CookieToSet[]) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        supabaseResponse = NextResponse.next({
          request,
        });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options)
        );
      },
    },
  });

  // Do not run supabase.auth.getUser() if env keys are placeholders
  const env = getSupabaseEnv();
  if (env.isConfigured) {
    try {
      await supabase.auth.getUser();
    } catch {
      // Gracefully handle unconfigured/unreachable network during local bootstrap
    }
  }

  return supabaseResponse;
}
