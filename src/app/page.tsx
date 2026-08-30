import { getAppEnv } from "@/lib/env";
import { FoundationStatus } from "@/components/foundation/FoundationStatus";

export default function Home() {
  const env = getAppEnv();

  return (
    <FoundationStatus
      appName={env.appName}
      appEnv={env.appEnv}
      isSupabaseConfigured={env.supabase.isConfigured}
      supabaseUrl={env.supabase.url}
    />
  );
}
