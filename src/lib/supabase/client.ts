import { createBrowserClient } from "@supabase/ssr";
import { getSupabaseEnv } from "@/lib/env";

/**
 * Creates an SSR-compatible Supabase client for Browser / Client Components ('use client').
 *
 * Automatically manages cookie-based sessions across client-side navigation.
 */
export function createClient() {
  const { url, anonKey } = getSupabaseEnv();

  return createBrowserClient(url, anonKey);
}
