/**
 * Core StudySync Domain & Foundation Types
 */

export type AppEnvironment = "development" | "staging" | "production" | "test";

export interface FoundationHealthStatus {
  status: "healthy" | "degraded" | "unconfigured";
  framework: string;
  runtime: string;
  typescript: boolean;
  tailwind: boolean;
  supabaseConfigured: boolean;
  timestamp: string;
}

/**
 * Placeholder user & session primitives for future Auth & Realtime phases
 */
export interface UserProfile {
  id: string;
  displayName: string;
  avatarUrl?: string;
  isAnonymous: boolean;
  createdAt: string;
}
