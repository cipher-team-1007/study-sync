/**
 * Centralized Environment Configuration & Validation
 *
 * Implements ADR-003: typed access to public environment variables
 * with non-crashing diagnostic fallbacks for beginner-friendly local development.
 */

export interface SupabaseEnvConfig {
  url: string;
  anonKey: string;
  isConfigured: boolean;
}

export interface AppEnvConfig {
  supabase: SupabaseEnvConfig;
  appEnv: string;
  appName: string;
  isDevelopment: boolean;
  isProduction: boolean;
}

const DEFAULT_PLACEHOLDER_URL = "https://placeholder-project-id.supabase.co";
const DEFAULT_PLACEHOLDER_ANON_KEY = "placeholder-anon-key-replace-with-your-own";

/**
 * Checks if a given environment value is valid and not a placeholder or empty string.
 */
export function isValidEnvValue(value: string | undefined): boolean {
  if (!value || typeof value !== "string") return false;
  const trimmed = value.trim();
  if (trimmed === "") return false;
  if (trimmed.includes("placeholder-") || trimmed.includes("replace-with-your-own")) return false;
  return true;
}

/**
 * Retrieves the Supabase client configuration.
 * Returns safe placeholder values if environment variables are not yet configured.
 */
export function getSupabaseEnv(): SupabaseEnvConfig {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || DEFAULT_PLACEHOLDER_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || DEFAULT_PLACEHOLDER_ANON_KEY;

  const isConfigured = isValidEnvValue(url) && isValidEnvValue(anonKey);

  return {
    url,
    anonKey,
    isConfigured,
  };
}

/**
 * Retrieves overall application environment configuration.
 */
export function getAppEnv(): AppEnvConfig {
  const supabase = getSupabaseEnv();
  const appEnv = process.env.NEXT_PUBLIC_APP_ENV || process.env.NODE_ENV || "development";
  const appName = process.env.NEXT_PUBLIC_APP_NAME || "StudySync";

  return {
    supabase,
    appEnv,
    appName,
    isDevelopment: appEnv === "development",
    isProduction: appEnv === "production",
  };
}
