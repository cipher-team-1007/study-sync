import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center space-y-4">
      <div className="mx-auto w-12 h-12 rounded-full bg-sky-950/80 border border-sky-800 flex items-center justify-center text-sky-400">
        <Compass className="w-6 h-6" />
      </div>
      <div>
        <h2 className="text-2xl font-extrabold text-white">404 - Page Not Found</h2>
        <p className="text-sm text-slate-400 mt-1">
          The requested route does not exist.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-sm font-semibold transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}
