# Phase 1 — Project Foundation Complete Debrief

**Lesson Number:** 002  
**Target Audience:** Two dedicated beginner developers building StudySync  
**Author:** `studysync-teacher`  
**Status:** COMPLETE & VERIFIED  
**Repository State:** Next.js 15 App Router, React 19, TypeScript 5, Tailwind CSS v4, Supabase SSR, Vitest, ESLint  

---

## 1. What We Built

In this phase, we constructed the **complete technical foundation and runnable application scaffold** for StudySync.

Before writing code for timelines, synchronized timers, or real-time study rooms, our project required a solid, production-grade structure that runs locally, enforces type safety, connects securely to backend services, and automates testing and quality checks.

### Verified Deliverables:
- **Next.js 15 App Router Application:** A modern fullstack React framework handling both client UI rendering and server execution.
- **Strict TypeScript 5 Setup:** Static typing system with `@/*` path aliases configured in `tsconfig.json`.
- **Tailwind CSS v4 Engine:** Utility-first styling with dark-mode tokens in `src/app/globals.css`.
- **Supabase SSR Client Factories:** `@supabase/ssr` architecture separating browser clients from server clients with cookie synchronization ([ADR-003](file:///c:/Users/kunal/Desktop/study-sync/docs/architecture/decisions/ADR-003-environment-and-supabase-architecture.md)).
- **Safe Environment System:** Centralized validation in `src/lib/env.ts` with non-sensitive template in `.env.example`.
- **Testing & Quality Tooling:** Vitest (`npm test`), ESLint (`npm run lint`), TypeScript check (`npm run typecheck`), and Next.js production build (`npm run build`).
- **Foundation Status UI:** Diagnostic dashboard in `src/components/foundation/FoundationStatus.tsx` showing environment health.

---

## 2. What We Did Not Build

To prevent premature complexity and maintain focus, the following features were **intentionally NOT built** in Phase 1:
- ❌ **No Authentication UI:** Login/signup forms will be built when needed.
- ❌ **No Study Rooms:** Room creation, shareable URLs, and room membership are deferred to Phase 2+.
- ❌ **No Horizontal Timeline Editor:** Visual timeline blocks and drag-and-drop are deferred to Phase 2.
- ❌ **No Realtime WebSockets:** WebSocket broadcast channels and presence indicators will be integrated in Phase 3–4.
- ❌ **No Synchronized Timers:** Timer state models and pause/resume logic are deferred to Phase 4.
- ❌ **No Database Tables:** Database schema migrations under `supabase/migrations/` will begin when tables are required.
- ❌ **No Music / AI / Analytics:** Third-party integrations belong to later milestones.

---

## 3. Big Picture Architecture

Here is how all the pieces of our system connect from the developer's computer to the cloud:

```text
┌────────────────────────────────────────────────────────────────────────┐
│                          Developer Machine                             │
│                                                                        │
│   Code (src/) ──► npm (Scripts & Packages) ──► TypeScript (Type Check)  │
│                         │                                              │
│                         ▼                                              │
│             Next.js App Router (Port 3000)                             │
│             ┌───────────────────────────────┐                          │
│             │ Server Environment (Node.js)  │                          │
│             │ • Server Components           │                          │
│             │ • src/lib/supabase/server.ts  │                          │
│             │ • cookies() async store       │                          │
│             └───────────────┬───────────────┘                          │
│                             │ HTTP / HTML Stream                       │
│                             ▼                                          │
│             ┌───────────────────────────────┐                          │
│             │ Browser Environment (Client)  │                          │
│             │ • React 19 Client Components  │                          │
│             │ • src/lib/supabase/client.ts  │                          │
│             │ • DOM Events & Interactivity  │                          │
│             └───────────────┬───────────────┘                          │
└─────────────────────────────┼──────────────────────────────────────────┘
                              │ HTTPS / WSS
                              ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        Supabase Cloud Platform                         │
│                                                                        │
│     Auth Engine (Cookies/JWT) ◄──► PostgreSQL Database (Relational)    │
│                                           ▲                            │
│                                           │ Realtime Engine (future)   │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Project Structure

Every folder in our repository has a strict single responsibility:

```text
study-sync/
├── .agents/                 # AI specialist agents, core rules, and workflows
├── docs/                    # Persistent documentation & long-term memory
│   ├── project-state/       # Active task, current phase, blocker registry
│   ├── product/             # Roadmap, user stories, PDRs
│   ├── teacher/             # Lessons, concepts, debriefs
│   ├── architecture/        # System designs, data models, ADRs
│   ├── engineering/         # Implementation notes, learning log
│   ├── testing/             # Test plans, test cases, verification reports
│   └── reviews/             # Independent code reviews, quality audits
├── src/                     # Application Source Code
│   ├── app/                 # Next.js App Router (pages, layouts, styles, errors)
│   ├── components/          # Reusable UI components
│   │   └── foundation/      # Diagnostic & bootstrap components
│   ├── lib/                 # Utility helpers, environment, Supabase clients
│   │   └── supabase/        # Browser and Server client factories
│   └── types/               # Shared TypeScript type definitions
├── supabase/                # Database configuration
│   └── migrations/          # Pure SQL schema migrations
├── .env.example             # Safe template for environment variables
├── .gitignore               # Excludes secrets, node_modules, build artifacts
├── package.json             # Project dependencies and automation scripts
├── tsconfig.json            # TypeScript compiler configuration
├── vitest.config.ts         # Vitest unit test runner configuration
├── eslint.config.mjs        # ESLint static analysis configuration
├── next.config.mjs          # Next.js framework configuration
├── postcss.config.mjs       # PostCSS & Tailwind CSS v4 processor configuration
└── README.md                # Developer onboarding and project guide
```

---

## 5. Development Environment

To work on StudySync, our machine needs:
1. **Node.js (v20+):** The JavaScript runtime environment that runs Next.js on your computer.
2. **npm (v10+):** The package manager that downloads open-source libraries and runs scripts.
3. **Local Port 3000:** The default local web server address (`http://localhost:3000`).

---

## 6. Next.js: The Fullstack React Framework

### Plain-Language Explanation:
React alone only knows how to build user interface components in the browser. Next.js is a complete fullstack framework built on top of React. It handles routing (which URL shows which page), server-side rendering, API requests, and image optimization.

### Key Concepts in Next.js 15 App Router:
1. **File-System Routing:** Every folder inside `src/app/` corresponds to a URL path. `src/app/page.tsx` renders the home page `/`.
2. **Layouts (`layout.tsx`):** A shared container that wraps child pages. It does not re-render when the user navigates between pages, preserving header, footer, and navigation state.
3. **Server Components (Default):** By default, components in `src/app/` execute on the server. They have direct access to server data and send clean HTML to the browser with zero client JavaScript overhead.
4. **Client Components (`"use client"`):** When a component needs user interactivity (like clicks, state hooks, or clipboard access), we add `"use client"` at the top of the file (e.g. `src/components/foundation/FoundationStatus.tsx`).

---

## 7. React 19: The UI Component Library

React is the library that lets us build declarative, component-based user interfaces. Instead of manually editing DOM nodes with `document.getElementById()`, we describe how the UI should look based on current state, and React efficiently updates the screen.

### React in StudySync:
- `layout.tsx` defines the overall layout tree.
- `FoundationStatus.tsx` manages interactive button state (`useState` for "Copied!" feedback).
- Future components will render timeline blocks, task editors, and live participants.

---

## 8. TypeScript: Static Type Safety

### Plain-Language Explanation:
JavaScript is dynamically typed, meaning a variable can hold anything and errors only appear when code actually runs. TypeScript adds a static type system on top of JavaScript that catches errors during coding.

### Concrete Example in StudySync:
In `src/lib/env.ts`, we define:
```typescript
export interface SupabaseEnvConfig {
  url: string;
  anonKey: string;
  isConfigured: boolean;
}
```
If any code attempts to access `config.unknownProperty`, TypeScript refuses to compile, preventing runtime crashes.

### Compile-Time vs Runtime:
- **Compile-Time (TypeScript):** Checked by `npm run typecheck` (`tsc --noEmit`). If types don't match, the build fails before deployment.
- **Runtime (JavaScript):** Once compiled, type annotations are stripped away. That is why runtime checks (like `isValidEnvValue()`) are still necessary for external data like user inputs or environment variables.

---

## 9. npm and Dependency Management

### What is `package.json`?
The project's manifest file. It lists project metadata, automation scripts, and external packages.

### Production Dependencies (`dependencies`):
Libraries required when the app runs in production:
- `next`, `react`, `react-dom`: The core framework.
- `@supabase/supabase-js`, `@supabase/ssr`: Supabase database and authentication clients.
- `clsx`, `tailwind-merge`: Class merging utilities.
- `lucide-react`: Lightweight, accessible icon set.

### Development Dependencies (`devDependencies`):
Tools used only during development and building (not shipped to production users):
- `typescript`, `@types/*`: TypeScript compiler and type definitions.
- `tailwindcss`, `@tailwindcss/postcss`, `postcss`: CSS processing engine.
- `vitest`, `@testing-library/react`, `jsdom`: Unit testing tools.
- `eslint`, `eslint-config-next`: Code quality linters.

---

## 10. Tailwind CSS v4: Modern Styling

### Plain-Language Explanation:
Instead of writing separate `.css` files with hundreds of custom class names, Tailwind provides utility classes that we apply directly in TSX:
- `p-6` = Padding of 1.5rem (24px)
- `bg-slate-900` = Dark slate background color
- `rounded-2xl` = Rounded corners (16px)
- `flex items-center justify-between` = Flexbox layout alignment

### Tailwind v4 in StudySync:
Our project uses Tailwind CSS v4, which eliminates legacy `tailwind.config.js` boilerplate in favor of native CSS `@import "tailwindcss";` inside `src/app/globals.css`.

---

## 11. Environment Variables: Configuration vs Secrets

### Why Do Applications Need Environment Variables?
Your application needs to know where its database lives, but you cannot hardcode URLs or API keys into the source code because:
1. Different environments (Local Development, Staging, Production) use different databases.
2. Hardcoded credentials committed to GitHub can be stolen by malicious bots.

### Rule of Prefix (`NEXT_PUBLIC_`):
- **`NEXT_PUBLIC_SUPABASE_URL`:** Prefixed with `NEXT_PUBLIC_`, meaning Next.js will safely bundle this value into browser JavaScript.
- **`SUPABASE_SERVICE_ROLE_KEY`:** NOT prefixed, meaning it remains strictly on the server and is never sent to browsers.

### `.env.example` vs `.env.local`:
- **`.env.example` (Committed to Git):** Contains placeholder names showing what variables the project needs.
- **`.env.local` (Ignored by `.gitignore`):** Contains your actual private credentials on your machine. **NEVER commit this file.**

---

## 12. Supabase: Backend-as-a-Service

### What is Supabase?
Supabase is an open-source platform that provides:
1. **PostgreSQL Database:** A relational database for storing rooms, tasks, and users.
2. **Authentication:** User accounts, passwords, email magic links, and cookie-based sessions.
3. **Realtime Engine:** WebSocket channels for live presence and event broadcasts.
4. **Row-Level Security (RLS):** Security rules enforced directly inside the database.

---

## 13. PostgreSQL: The Relational Source of Truth

### What is a Relational Database?
A database that organizes data into structured **tables** consisting of rows and columns. Tables connect to one another through **Foreign Keys**.

### Why StudySync Needs Relational PostgreSQL:
StudySync data is inherently relational:
- A **Room** has many **Tasks**.
- A **Room** has one active **StudySession**.
- A **Task** belongs to one specific **Room**.
- If a Room is deleted, PostgreSQL automatically cleans up all associated Tasks via `CASCADE DELETE`.

---

## 14. Browser Execution vs Server Execution

In Next.js App Router, code runs in two different environments:

| Feature | Browser Environment (Client) | Server Environment (Node.js) |
| :--- | :--- | :--- |
| **Where it runs** | User's web browser (Chrome, Firefox, Safari) | Backend server / Edge runtime |
| **Access to Window / DOM** | Yes (`window`, `document`, `navigator`) | No (`window is undefined`) |
| **Access to Secrets / Env** | Only `NEXT_PUBLIC_` variables | All server environment variables |
| **Access to Cookies** | `document.cookie` | Request HTTP Headers / `cookies()` |
| **Direct DB Connection** | No (must go through API or public client) | Yes (direct database client) |

---

## 15. Supabase Client Separation ([ADR-003](file:///c:/Users/kunal/Desktop/study-sync/docs/architecture/decisions/ADR-003-environment-and-supabase-architecture.md))

Why do we have two separate Supabase client files?

### 1. Browser Client (`src/lib/supabase/client.ts`):
```typescript
import { createBrowserClient } from "@supabase/ssr";
import { getSupabaseEnv } from "@/lib/env";

export function createClient() {
  const { url, anonKey } = getSupabaseEnv();
  return createBrowserClient(url, anonKey);
}
```
*Purpose:* Used in `"use client"` components to listen to Realtime WebSocket channels or handle user button clicks in the browser.

### 2. Server Client (`src/lib/supabase/server.ts`):
```typescript
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { getSupabaseEnv } from "@/lib/env";

export async function createClient() {
  const cookieStore = await cookies();
  const { url, anonKey } = getSupabaseEnv();

  return createServerClient(url, anonKey, {
    cookies: {
      getAll() { return cookieStore.getAll(); },
      setAll(cookiesToSet) { ... },
    },
  });
}
```
*Purpose:* Used in Server Components and Route Handlers to securely fetch data from PostgreSQL using the user's session cookie.

---

## 16. SSR (Server-Side Rendering) and Cookies

### What is SSR?
When a user requests a page, the server renders the React component tree into an HTML string and sends it to the browser. The user sees content immediately, even before JavaScript loads.

### What Role Do Cookies Play?
When a user logs in, Supabase stores their authentication token in an **HTTP Cookie**. When the browser requests an SSR page, it automatically sends that cookie in the HTTP request header. Next.js reads that cookie on the server, verifies who the user is, and renders their private study rooms directly into the initial HTML.

---

## 17. Middleware

`src/lib/supabase/middleware.ts` provides a helper to refresh expired authentication tokens automatically during incoming HTTP requests, ensuring user sessions remain valid across page navigations.

---

## 18. Error Handling & Boundaries

Next.js provides dedicated special files to handle failures gracefully:
- **`src/app/error.tsx`:** A client error boundary. If a React component throws an unhandled error, Next.js catches it and displays a clean recovery UI with a "Try again" button instead of crashing the entire browser tab.
- **`src/app/not-found.tsx`:** Rendered when a requested route or ID does not exist (404), providing a link back to safety.
- **`src/lib/env.ts` Fallbacks:** If environment variables are missing, our helper returns safe placeholder strings so local development and test runners do not crash unexpectedly.

---

## 19. Automated Testing (Vitest & Testing Library)

### Why Do We Test?
A successful build only proves our code has valid syntax. It does not prove our logic is correct. Tests prove that our code produces the exact expected output for specific inputs.

### Our Test Suite (`npm test`):
1. **`src/lib/env.test.ts` (4 unit tests):**
   - Verifies `isValidEnvValue` accurately flags empty strings and placeholders.
   - Verifies fallback defaults when environment variables are missing.
   - Verifies configuration status when valid credentials exist.
   - Verifies app metadata (`appName`, `isDevelopment`).
2. **`src/lib/utils.test.ts` (3 unit tests):**
   - Verifies class name merging.
   - Verifies conditional class filtering.
   - Verifies Tailwind conflict deduplication (e.g. `p-4` + `p-8` = `p-8`).

---

## 20. ESLint vs TypeScript vs Vitest

| Tool | What It Inspects | What It Catches | Command |
| :--- | :--- | :--- | :--- |
| **ESLint** | Code style, syntax patterns, React hook rules | Unused variables, missing hook dependencies, deprecated APIs | `npm run lint` |
| **TypeScript** | Static data types & contracts | Mismatched properties, misspelled functions, invalid arguments | `npm run typecheck` |
| **Vitest** | Executed logic & behavior | Algorithmic bugs, calculation errors, regression in business logic | `npm test` |

---

## 21. Build Process: Development vs Production

- **Development (`npm run dev`):** Compiles files on-demand (fast startup, hot module reloading when you save files, detailed error overlays).
- **Production Build (`npm run build`):** Fully optimizes code, bundles JavaScript chunks, minifies CSS, strips development comments, and pre-renders static HTML pages.
- **Production Start (`npm run start`):** Runs the highly optimized production build locally to simulate real deployment.

---

## 22. Git Workflow & Discipline

- **`.gitignore` Protection:** Blocks `node_modules/`, `.next/`, and `.env*` files from entering version control.
- **Zero-Secret Invariant:** Secrets must NEVER be committed to Git.
- **Focused Commits:** Each commit represents a verified unit of work with automated tests passing.

---

## 23. Runtime Flow: What Happens When You Open StudySync

Here is the exact step-by-step trace when you open `http://localhost:3000`:

1. **Browser Request:** User enters `http://localhost:3000` ➔ Browser sends `GET /` to Next.js.
2. **Server Execution:** Next.js matches `/` to `src/app/page.tsx` and wraps it in `src/app/layout.tsx`.
3. **Configuration Check:** `page.tsx` calls `getAppEnv()` from `src/lib/env.ts`.
4. **Status Evaluation:** `getAppEnv()` checks if `NEXT_PUBLIC_SUPABASE_URL` is configured.
5. **HTML Generation:** The server renders the `FoundationStatus` UI markup into HTML.
6. **HTTP Response:** The server streams the HTML, CSS, and JS bundle to the browser.
7. **Client Hydration:** The browser loads React, binds interactive events (copy buttons), and the page becomes interactive.

---

## 24. Important Files Quick Reference

| File | Purpose |
| :--- | :--- |
| [`package.json`](file:///c:/Users/kunal/Desktop/study-sync/package.json) | Declares dependencies and scripts (`dev`, `build`, `test`, `lint`, `typecheck`). |
| [`tsconfig.json`](file:///c:/Users/kunal/Desktop/study-sync/tsconfig.json) | Strict TypeScript rules and `@/*` alias mapping. |
| [`src/app/globals.css`](file:///c:/Users/kunal/Desktop/study-sync/src/app/globals.css) | Tailwind CSS v4 styling and dark theme tokens. |
| [`src/lib/env.ts`](file:///c:/Users/kunal/Desktop/study-sync/src/lib/env.ts) | Validates environment variables and provides safe fallbacks. |
| [`src/lib/supabase/client.ts`](file:///c:/Users/kunal/Desktop/study-sync/src/lib/supabase/client.ts) | Browser-side Supabase client for Client Components. |
| [`src/lib/supabase/server.ts`](file:///c:/Users/kunal/Desktop/study-sync/src/lib/supabase/server.ts) | Server-side Supabase client for Server Components with async cookies. |
| [`vitest.config.ts`](file:///c:/Users/kunal/Desktop/study-sync/vitest.config.ts) | Automated unit test runner configuration. |
| [`.env.example`](file:///c:/Users/kunal/Desktop/study-sync/.env.example) | Safe template showing required environment variables. |

---

## 25. Key Engineering Tradeoffs Accepted

1. **Next.js App Router vs Custom Express/Socket Server:** App Router provides unified fullstack architecture with SSR and automatic bundling, avoiding the DevOps nightmare of maintaining separate backend servers.
2. **Supabase BaaS vs Self-Hosted Postgres & Redis:** Supabase eliminates server hosting overhead, letting us focus on timeline logic, timer math, and user experience.
3. **Vitest vs Jest:** Vitest runs TypeScript natively without slow Babel transpilation, executing our test suite in under 2 seconds.

---

## 26. Realistic Failure Cases & Diagnoses

| Symptom | Probable Root Cause | How to Diagnose & Fix |
| :--- | :--- | :--- |
| `npm run typecheck` fails | TypeScript type mismatch or missing property. | Read the terminal file/line error. Fix type signatures. |
| `npm test` fails | Unit test assertion failed. | Check which test in `src/lib/` failed. Fix the broken logic. |
| Browser shows "Local Standby" | No `.env.local` configured. | Copy `.env.example` to `.env.local` and add Supabase keys. |
| `createServerClient` cookie error | `cookies()` was not awaited in Next.js 15. | Ensure `const cookieStore = await cookies();` is present in `server.ts`. |

---

## 27. Common Beginner Mistakes

1. **"React is the backend":** React only renders UI. Next.js server components and Route Handlers act as the backend.
2. **"TypeScript protects me at runtime":** TypeScript only checks code at compile time. Runtime validation is still required for external inputs.
3. **"Committing `.env.local` is fine for private repos":** Private repos can be shared, leaked, or cloned onto insecure machines. Never commit secrets.
4. **"Passing `npm run build` means all features work":** A build only verifies syntax and packaging. Tests and manual verification prove behavior.

---

## 28. How Phase 1 Prepares Phase 2

In Phase 2, we will build the **Planning Workspace & Interactive Horizontal Timeline**:
- Tailwind v4 theme tokens will style the timeline grid and task blocks.
- TypeScript interfaces will define task models (`id`, `title`, `durationMinutes`, `orderIndex`).
- Vitest will test timeline split and reorder algorithms.
- Supabase client factories will connect the timeline to live PostgreSQL tables.

---

## 29. What We Should Remember

1. **Clean Separation:** Browser code (`client.ts`) handles user clicks; Server code (`server.ts`) talks to the database.
2. **Always Run Quality Scripts:** Before submitting PRs, run `npm run typecheck`, `npm run lint`, and `npm test`.
3. **Guard the Scope:** Build vertical slices that match approved ADRs. Never invent shadow architectures.

---

## 30. Glossary

- **App Router:** Next.js file-system routing inside `src/app/`.
- **SSR (Server-Side Rendering):** Rendering React components to HTML on the server before sending to the client.
- **Hydration:** React attaching browser event listeners to server-rendered HTML.
- **BaaS:** Backend-as-a-Service (e.g. Supabase).
- **Static Typing:** Verifying variable types before code executes.
- **Vitest:** Fast automated TypeScript unit test framework.
- **PostgreSQL:** Open-source relational database management system.

---

## 31. Final Understanding Quiz

Test your mastery of Phase 1! Try to answer these questions before checking documentation:

### Conceptual Questions (10)
1. What is the fundamental difference between Next.js and plain React?
2. What does `"use client"` at the top of a file instruct Next.js to do?
3. Why does `src/app/layout.tsx` not re-render when a user navigates between pages?
4. What is the purpose of the `NEXT_PUBLIC_` prefix on environment variables?
5. Why must `.env.local` never be committed to Git?
6. What is the difference between `dependencies` and `devDependencies` in `package.json`?
7. What does `tsc --noEmit` do when you run `npm run typecheck`?
8. What is the difference between compile-time type checking and runtime validation?
9. What is a relational database, and why is PostgreSQL suitable for StudySync?
10. What does the `cn()` helper in `src/lib/utils.ts` do when merging Tailwind classes?

### Practical Reasoning Questions (5)
11. Why do we need separate `client.ts` and `server.ts` files for our Supabase clients?
12. How does Next.js 15 handle `cookies()` inside Server Components differently from older Next.js versions?
13. If a beginner developer clones StudySync and runs `npm run dev` without creating a `.env.local` file, what happens?
14. Why is Vitest used for testing instead of relying solely on `npm run build`?
15. What kind of errors does ESLint catch that TypeScript might ignore?

### StudySync Architecture Questions (3)
16. In our future real-time study rooms, which Supabase client (`client.ts` or `server.ts`) will listen to live WebSocket channels?
17. Why did we decide against storing our entire study room state in a single unstructured JSON document?
18. Where will database schema definitions live when we start creating tables in Phase 2?

### Debugging Scenarios (2)
19. **Scenario A:** A developer added a new property `avatarUrl` to a component props interface, but TypeScript throws an error in `npm run typecheck`. What is the cause, and how do you resolve it?
20. **Scenario B:** A developer added `process.env.SECRET_KEY` inside a Client Component (`"use client"`), but it returns `undefined` in the browser. Why is it `undefined`, and is this a bug or a security feature?
