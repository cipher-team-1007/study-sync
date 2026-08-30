"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log client error for debugging
    console.error("Unhandled client boundary error:", error);
  }, [error]);

  return (
    <div className="max-w-md w-full bg-slate-900 border border-red-900/50 rounded-2xl p-6 text-center space-y-4">
      <div className="mx-auto w-12 h-12 rounded-full bg-red-950/80 border border-red-800 flex items-center justify-center text-red-400">
        <AlertTriangle className="w-6 h-6" />
      </div>
      <div>
        <h2 className="text-xl font-bold text-white">Something went wrong</h2>
        <p className="text-sm text-slate-400 mt-1">
          {error.message || "An unexpected error occurred in the application."}
        </p>
      </div>
      <button
        onClick={() => reset()}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold transition-colors cursor-pointer"
      >
        <RotateCcw className="w-4 h-4" />
        Try again
      </button>
    </div>
  );
}
