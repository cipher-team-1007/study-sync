# StudySync — Developer Learning Log

This log is owned by the developers. Use this file to record personal reflections, key takeaways, architectural realizations, and answers to thought exercises posed during Teacher Mode sessions.

---

## Template for Entries

### [YYYY-MM-DD] Entry Title

- **Topic / Feature:**
- **Key Takeaways:**
  1. ...
  2. ...
- **What Surprised Us / What Broke:**
- **Open Questions to Explore Next:**

---

## Log Entries

### [2026-08-27] Phase 0 Kickoff & Teacher Mode Initialization

- **Topic / Feature:** Project Setup, Development Philosophy & Documentation Architecture
- **Key Takeaways:**
  1. StudySync is a collaborative real-time study room built around a timeline + synchronized session controls.
  2. Our rule: Every Feature = Working Feature + Understanding + Testing + Documentation.
  3. We separate knowledge into three explicit buckets: `docs/teacher/` (taught concepts), `docs/engineering/` (our reflections), and `docs/product/` (product specs).
- **Current Phase:** Phase 0 — Product Discovery & Engineering Foundation

### [2026-08-27] Contributor Workspace Setup — parmarth-kumar

- **Topic / Feature:** Contributor Git Identity & Access Setup
- **Key Takeaways:**
  1. Configured local git environment and remote credentials for `parmarth-kumar`.
  2. Workspace linked to `cipher-team-1007/study-sync` organization repository.

### [2026-08-29] Phase 1 Technical Stack Selection & Architectural Blueprint

- **Topic / Feature:** Technology Stack Selection, Realtime & State Ownership Strategy (ADR-001)
- **Key Takeaways:**
  1. Selected Next.js (App Router, TypeScript, Tailwind) + Supabase (PostgreSQL, Auth, Realtime) as the Phase 1 MVP foundation.
  2. Defined 4-tier state hierarchy: Persistent (Postgres), Ephemeral (Realtime Channels), Derived (Client math), Local UI (React state).
  3. Established authoritative timestamp timer model: instead of broadcasting every second, write state transitions (`started_at`, `status`) to DB and let clients deterministically calculate remaining seconds.
  4. Deliberately deferred premature complexities (Redux/Zustand, CRDTs, custom WebSocket cluster, Docker).
- **Associated Architecture Documents:**
  - [ADR-001: Phase 1 Core Technical Stack](file:///c:/Users/kunal/Desktop/study-sync/docs/architecture/decisions/ADR-001-phase1-tech-stack.md)
  - [Phase 1 System Architecture Overview](file:///c:/Users/kunal/Desktop/study-sync/docs/architecture/system-overview.md)

### [2026-08-31] Phase 1 — Project Foundation & Application Scaffold Debrief

- **Topic / Feature:** Next.js 15 App Router Scaffold, Supabase SSR Architecture & Quality Tooling (ADR-003)
- **Key Takeaways:**
  1. Built the complete technical foundation with Next.js 15, React 19, TypeScript 5.8, Tailwind CSS v4, and Supabase SSR.
  2. Implemented strict browser vs server Supabase client separation (`client.ts` uses `createBrowserClient`; `server.ts` uses `createServerClient` with asynchronous `cookies()`).
  3. Established centralized environment validation in `src/lib/env.ts` with safe local fallback handling and strict zero-secrets policy via `.gitignore`.
  4. Configured automated quality pipeline: `npm run typecheck`, `npm test` (7/7 Vitest tests passing), `npm run lint`, and `npm run build`.
  5. Kept scope strictly bounded to infrastructure without prematurely coding product features.
- **Associated Lessons & Reports:**
  - [Lesson 002: Phase 1 Project Foundation Complete Debrief](file:///c:/Users/kunal/Desktop/study-sync/docs/teacher/lessons/002-phase1-project-foundation-complete-debrief.md)
  - [ADR-003: Environment Configuration and Supabase Client Architecture](file:///c:/Users/kunal/Desktop/study-sync/docs/architecture/decisions/ADR-003-environment-and-supabase-architecture.md)
  - [Phase 1 Verification Report](file:///c:/Users/kunal/Desktop/study-sync/docs/testing/session-reports/phase1-foundation-verification.md)

