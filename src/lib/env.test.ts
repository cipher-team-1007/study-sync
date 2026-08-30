import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { getSupabaseEnv, getAppEnv, isValidEnvValue } from "./env";

describe("Environment Configuration (env.ts)", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("identifies placeholder and empty values correctly", () => {
    expect(isValidEnvValue(undefined)).toBe(false);
    expect(isValidEnvValue("")).toBe(false);
    expect(isValidEnvValue("   ")).toBe(false);
    expect(isValidEnvValue("https://placeholder-project-id.supabase.co")).toBe(false);
    expect(isValidEnvValue("placeholder-anon-key-replace-with-your-own")).toBe(false);
    expect(isValidEnvValue("https://abcdefgh.supabase.co")).toBe(true);
    expect(isValidEnvValue("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...")).toBe(true);
  });

  it("returns safe defaults when env variables are not set", () => {
    delete process.env.NEXT_PUBLIC_SUPABASE_URL;
    delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const config = getSupabaseEnv();
    expect(config.url).toBe("https://placeholder-project-id.supabase.co");
    expect(config.anonKey).toBe("placeholder-anon-key-replace-with-your-own");
    expect(config.isConfigured).toBe(false);
  });

  it("marks isConfigured as true when valid credentials exist", () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://actual-project.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "valid-anon-key-123456";

    const config = getSupabaseEnv();
    expect(config.url).toBe("https://actual-project.supabase.co");
    expect(config.anonKey).toBe("valid-anon-key-123456");
    expect(config.isConfigured).toBe(true);
  });

  it("returns application metadata correctly", () => {
    process.env.NEXT_PUBLIC_APP_NAME = "StudySync Test";
    process.env.NEXT_PUBLIC_APP_ENV = "development";

    const appConfig = getAppEnv();
    expect(appConfig.appName).toBe("StudySync Test");
    expect(appConfig.isDevelopment).toBe(true);
    expect(appConfig.isProduction).toBe(false);
  });
});
