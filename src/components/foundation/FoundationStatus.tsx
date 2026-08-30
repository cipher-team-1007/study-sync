"use client";

import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, Terminal, Database, Code2, AlertTriangle, Layers, BookOpen } from "lucide-react";

interface FoundationStatusProps {
  appName: string;
  appEnv: string;
  isSupabaseConfigured: boolean;
  supabaseUrl: string;
}

export function FoundationStatus({
  appName,
  appEnv,
  isSupabaseConfigured,
  supabaseUrl,
}: FoundationStatusProps) {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(label);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const stackItems = [
    { name: "Next.js 15", desc: "App Router & React 19", icon: Layers, status: "Active" },
    { name: "TypeScript 5", desc: "Strict Type Safety", icon: Code2, status: "Strict" },
    { name: "Tailwind CSS v4", desc: "Native Styling Tokens", icon: ShieldCheck, status: "Active" },
    {
      name: "Supabase SSR",
      desc: isSupabaseConfigured ? "Connected" : "Local Placeholder Mode",
      icon: Database,
      status: isSupabaseConfigured ? "Ready" : "Standby",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 p-6">
      {/* Header Badge */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-950/80 text-sky-400 border border-sky-800 mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            Phase 1: Project Foundation & Bootstrap
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {appName}
          </h1>
          <p className="text-slate-400 mt-1 text-sm sm:text-base">
            Collaborative real-time study room with synchronized timeline and session controls.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-2 text-xs">
          <div className="flex flex-col">
            <span className="text-slate-400 font-medium">Environment</span>
            <span className="text-slate-200 font-mono font-bold capitalize">{appEnv}</span>
          </div>
          <div className="h-6 w-px bg-slate-800"></div>
          <div className="flex flex-col">
            <span className="text-slate-400 font-medium">Status</span>
            <span className="text-emerald-400 font-mono font-bold">BOOTSTRAPPED</span>
          </div>
        </div>
      </div>

      {/* Tech Stack Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stackItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-5 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-slate-800 rounded-lg text-sky-400">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs px-2 py-0.5 rounded font-mono font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                  {item.status}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-white text-base">{item.name}</h3>
                <p className="text-slate-400 text-xs mt-1">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Supabase Status Card */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div
              className={`p-3 rounded-xl ${
                isSupabaseConfigured
                  ? "bg-emerald-950/70 text-emerald-400 border border-emerald-800"
                  : "bg-amber-950/70 text-amber-400 border border-amber-800"
              }`}
            >
              {isSupabaseConfigured ? (
                <CheckCircle2 className="w-6 h-6" />
              ) : (
                <AlertTriangle className="w-6 h-6" />
              )}
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                Supabase Backend Configuration
                <span
                  className={`text-xs px-2 py-0.5 rounded font-mono font-semibold ${
                    isSupabaseConfigured
                      ? "bg-emerald-900/60 text-emerald-300 border border-emerald-700"
                      : "bg-amber-900/60 text-amber-300 border border-amber-700"
                  }`}
                >
                  {isSupabaseConfigured ? "Connected" : "Local Standby"}
                </span>
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
                {isSupabaseConfigured
                  ? `Configured to target: ${supabaseUrl}`
                  : "Running in local standby mode with safe fallback handling. No live Supabase keys configured yet in .env.local."}
              </p>
            </div>
          </div>
        </div>

        {!isSupabaseConfigured && (
          <div className="mt-5 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-200">
              <BookOpen className="w-4 h-4 text-sky-400" />
              <span>How to connect your live Supabase database later:</span>
            </div>
            <ol className="list-decimal list-inside text-slate-400 space-y-1 pl-1">
              <li>
                Copy <code className="text-sky-300 bg-slate-900 px-1 py-0.5 rounded">.env.example</code> to{" "}
                <code className="text-sky-300 bg-slate-900 px-1 py-0.5 rounded">.env.local</code>.
              </li>
              <li>Add your Supabase Project URL and Public Anon Key.</li>
              <li>Restart the development server.</li>
            </ol>
          </div>
        )}
      </div>

      {/* Developer Quality Commands */}
      <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
        <h2 className="text-base font-bold text-white mb-3 flex items-center gap-2">
          <Terminal className="w-5 h-5 text-sky-400" />
          Engineering Quality Scripts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
          {[
            { label: "Type Check", cmd: "npm run typecheck", desc: "Strict TypeScript compiler check" },
            { label: "Unit Tests", cmd: "npm test", desc: "Run Vitest test suite" },
            { label: "Production Build", cmd: "npm run build", desc: "Next.js compilation & bundling" },
          ].map((item) => (
            <button
              key={item.cmd}
              onClick={() => copyToClipboard(item.cmd, item.label)}
              className="p-3 text-left rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors group cursor-pointer"
            >
              <div className="flex items-center justify-between text-slate-400 group-hover:text-sky-400 mb-1">
                <span>{item.label}</span>
                <span className="text-[10px] text-slate-500 font-sans">
                  {copiedCommand === item.label ? "Copied!" : "Click to copy"}
                </span>
              </div>
              <div className="text-slate-200 font-bold">{item.cmd}</div>
              <div className="text-[11px] text-slate-500 font-sans mt-1">{item.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
