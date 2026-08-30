import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StudySync — Real-Time Collaborative Study Room",
  description:
    "Collaborative real-time study room where people plan a shared timeline and execute it together using synchronized tasks, timers, and session controls.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen bg-[#090d16] text-slate-100 flex flex-col justify-between">
        <main className="flex-1 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <footer className="py-6 border-t border-slate-900 text-center text-xs text-slate-500">
          StudySync &copy; 2026 — Built with Next.js, React 19, TypeScript, Tailwind CSS & Supabase
        </footer>
      </body>
    </html>
  );
}
