# ADR-003 — Environment Configuration and Supabase Client Architecture

## Status

**Accepted**

## Date

2026-08-31

## Context

StudySync utilizes Next.js App Router (React 19) paired with Supabase (PostgreSQL, Auth, Realtime) as decided in [ADR-001](file:///c:/Users/kunal/Desktop/study-sync/docs/architecture/decisions/ADR-001-phase1-tech-stack.md).

Because Next.js renders code in both Server environments (Node.js/Edge Server Components, Route Handlers, Server Actions) and Client environments (Browser React Components), Supabase client initialization must respect strict runtime boundaries:
1. **Client Components:** Run in the browser and can only access public environment variables prefixed with `NEXT_PUBLIC_`. Authentication state is managed through browser cookies.
2. **Server Components & Route Handlers:** Run on the server and have access to server-side cookies, request headers, and optional private service keys.
3. **Environment Variable Hygiene:** Raw `process.env` access across the codebase leads to silent `undefined` errors, broken builds, or leaked server secrets.
4. **Developer Experience for Beginners:** Missing environment variables in local development should produce clear, actionable diagnostic messages rather than opaque fatal runtime exceptions.

---

## Constraints

- **Security Invariant:** Never leak private keys or service role tokens to client-side bundles.
- **SSR & Cookie Sync:** Authentication tokens stored in cookies must synchronize smoothly between browser and server without hydration mismatches.
- **Team Skill Level:** Two beginner developers learning fullstack architecture. Patterns must be explicit and approachable.

---

## Options Considered

### Option 1: Single Global Supabase Client (`createClient` from `@supabase/supabase-js`)
- **Description:** Initialize one global Supabase instance exported from a helper file.
- **Pros:** Minimal boilerplate.
- **Cons:** Flawed in Next.js App Router. A global client cannot read or set HTTP cookies dynamically in server components or route handlers, causing broken authentication and SSR session drops.
- **Complexity:** Low (but technically incorrect for SSR).

### Option 2: Full Heavyweight Validation Library (T3 Env / Zod Schema with Fatal Build Stops)
- **Description:** Enforce strict Zod schemas that crash process startup if variables are absent.
- **Pros:** Absolute type safety.
- **Cons:** Impedes quick local bootstrapping, makes test suites brittle when running isolated unit tests without live Supabase projects, and introduces heavy validation dependencies prematurely.
- **Complexity:** Medium.

### Option 3: Lightweight Typed Environment Access + `@supabase/ssr` Package [RECOMMENDED]
- **Description:**
  - Create a centralized environment helper (`src/lib/env.ts`) providing typed, safe access to `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`, with graceful fallback warnings for local development and testing.
  - Implement two distinct Supabase client factories using official `@supabase/ssr`:
    - `src/lib/supabase/client.ts` (`createBrowserClient`) for browser client components.
    - `src/lib/supabase/server.ts` (`createServerClient`) for server components, route handlers, and server actions using Next.js `cookies()`.
- **Pros:**
  - Standard, recommended Supabase SSR architecture.
  - Bulletproof cookie synchronization for future authentication.
  - App runs and tests pass locally even before a live Supabase project is configured.
  - Zero heavy external dependencies.
- **Complexity:** Low-Medium.

---

## Decision

We adopt **Option 3: Lightweight Typed Environment Access + `@supabase/ssr` Package**.

### Architecture Blueprint

```text
                                    ┌────────────────────────┐
                                    │      src/lib/env.ts     │
                                    │ (Validation & Fallback)│
                                    └───────────┬────────────┘
                                                │
                     ┌──────────────────────────┴──────────────────────────┐
                     ▼                                                     ▼
      ┌─────────────────────────────┐                       ┌─────────────────────────────┐
      │  src/lib/supabase/client.ts  │                       │  src/lib/supabase/server.ts  │
      │   (createBrowserClient)     │                       │    (createServerClient)     │
      └──────────────┬──────────────┘                       └──────────────┬──────────────┘
                     │                                                     │
                     ▼                                                     ▼
           Browser Client Comps                                  Server Components & APIs
           ('use client')                                        (cookie-aware SSR)
```

---

## Rationale (Why)

1. **Alignment with Next.js App Router:** `@supabase/ssr` is the official, supported mechanism for handling cookies and auth tokens across Server Components and Client Components.
2. **Prevent Silent Failures:** `env.ts` centralizes all configuration logic so developers immediately know if their `.env.local` is missing keys.
3. **No Commits of Real Secrets:** `.env.example` provides the canonical template, while `.env.local` remains strictly in `.gitignore`.

---

## Implementation Boundary

1. `src/lib/env.ts`: Centralized accessor and validation functions.
2. `src/lib/supabase/client.ts`: Client-side factory.
3. `src/lib/supabase/server.ts`: Server-side factory using `@next/cookies`.
4. `.env.example`: Safe template with non-sensitive placeholder format.
5. Unit tests in `src/lib/env.test.ts` verifying fallback and validation behavior.

---

## Learning Notes (Teacher Mode Connection)

- **SSR vs CSR in App Router:** Why server components need cookies passed dynamically while browser clients use `document.cookie`.
- **Environment Variable Scope:** What `NEXT_PUBLIC_` does during the Next.js build step (inline replacement vs server-only runtime lookup).
