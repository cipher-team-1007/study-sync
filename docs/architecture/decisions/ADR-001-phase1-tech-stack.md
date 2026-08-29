# ADR-001 — Selection of Phase 1 Core Technical Stack

## Status

**Accepted**

## Date

2026-08-29

## Context

StudySync is a collaborative real-time study room application built around a shared timeline and synchronized session timers. The project is being engineered by two beginner-level developers who are learning software engineering principles while building a production-quality MVP.

We need to establish an initial technology stack for Phase 1 that:
1. Supports the core MVP product loop (Plan → Share → Join → Focus → Sync → Review).
2. Minimizes operational/DevOps overhead so the team can focus on application architecture, state modeling, and engineering fundamentals.
3. Provides strong type safety and relational data modeling to prevent silent runtime errors.
4. Out-of-the-box support for WebSockets/Realtime events, presence, and user authentication.
5. Remains simple, understandable, and testable without introducing unnecessary abstractions.

## Constraints

- **Team Skill Level**: Two beginner developers learning modern web engineering. Architecture must be explicit, approachable, and transparent.
- **Development Velocity**: Cannot spend weeks configuring custom WebSocket server infrastructure, Redis clusters, or Auth crypto logic before delivering product value.
- **Budget**: Must run smoothly on free-tier developer tooling.
- **Long-term Value**: Core concepts learned must be industry-standard (TypeScript, Relational SQL, Event-driven Realtime) rather than obscure proprietary abstractions.

## Options Considered

### Option 1: Custom Node.js/Express + WebSockets (Socket.io) + Raw PostgreSQL + Custom JWT Auth (Full Custom Stack)
- **Description:** Build a separate Express API server, configure Socket.io with sticky sessions/Redis pub-sub, manage JWT authentication in cookies, and connect directly to raw Postgres via pg or an ORM.
- **Pros:** Total control over server lifecycle, in-memory state, and protocol.
- **Cons:** Massive operational and architectural overhead for beginners. High risk of security vulnerabilities (auth, token storage, CSRF), complex multi-server deployment (separate frontend and backend hosting), and distraction from the core product logic.
- **Complexity:** High

### Option 2: Firebase (Firestore + Firebase Auth + Firebase Realtime Database)
- **Description:** Google Firebase ecosystem using NoSQL document store (Firestore) and Firebase client SDK.
- **Pros:** Fast initial setup, built-in realtime subscriptions, managed auth.
- **Cons:** NoSQL document database makes relational timeline modeling (tasks ordered within rooms, cascading deletions, composite unique constraints) difficult and prone to denormalization bugs. Vendor lock-in with non-standard querying concepts.
- **Complexity:** Low-Medium

### Option 3: Next.js (TypeScript, React, Tailwind CSS) + Supabase (PostgreSQL, Supabase Auth, Supabase Realtime) [RECOMMENDED]
- **Description:** Modern unified fullstack frontend in Next.js paired with Supabase as a Backend-as-a-Service (BaaS) providing real PostgreSQL, built-in WebSocket Realtime (broadcast, presence, postgres changes), and managed Authentication with Row-Level Security (RLS).
- **Pros:**
  - True relational SQL (PostgreSQL) with strict constraints and foreign keys.
  - Zero-maintenance realtime engine for presence and room events.
  - End-to-end TypeScript type safety (database types can be generated directly from Postgres schema).
  - Single repository deployment on Vercel + Supabase free tier.
  - Skills learned (Postgres SQL, TypeScript, React component lifecycle, WebSocket event flows) are 100% industry standard.
- **Cons:** Tied to Supabase client conventions for realtime; serverless functions require stateless backend patterns (which actually reinforces good persistent vs ephemeral state hygiene).
- **Complexity:** Low-Medium (Optimal balance of speed and engineering depth).

---

## Decision

We decide to adopt **Option 3: Next.js, React, TypeScript, Tailwind CSS, and Supabase (PostgreSQL, Auth, Realtime)** as the Phase 1 core technical stack.

### Stack Breakdown

| Layer | Technology | Purpose in StudySync |
| :--- | :--- | :--- |
| **Frontend Framework** | **Next.js (App Router) + React** | Single-codebase frontend & API routes; componentized timeline and room UI |
| **Language** | **TypeScript** | Strict type contracts across UI state, APIs, events, and database entities |
| **Styling** | **Tailwind CSS** | Fast, consistent utility-first styling for horizontal timeline grids and controls |
| **Database** | **PostgreSQL (Supabase)** | Relational source of truth for rooms, tasks, sessions, and memberships |
| **Authentication** | **Supabase Auth** | Secure user identity (anonymous & email login) integrated with Postgres RLS |
| **Realtime Engine** | **Supabase Realtime** | WebSocket channels for participant presence, timer state events, and task updates |
| **Tooling & VCS** | **npm & Git/GitHub** | Dependency management, branch protection, and collaborative PR workflows |

---

## Rationale (Why)

1. **Focus on Product and Learning:** Supabase removes the undifferentiated heavy lifting of hosting databases, auth servers, and WebSocket brokers, allowing the developers to concentrate on domain modeling, timeline algorithms, timer synchronization, and UI/UX.
2. **Relational Integrity is Essential:** StudySync's domain is inherently relational (Room has many Tasks, Room has one active StudySession, Room has many RoomMembers). PostgreSQL provides bulletproof foreign keys and cascading rules.
3. **Type Safety Across Boundaries:** TypeScript prevents mismatched data structures between the database, server responses, and React components.
4. **Architectural Guardrails:** Using a managed PostgreSQL backend forces good state separation (authoritative database state vs ephemeral realtime events vs derived client countdowns).

---

## What We Deliberately Defer (Not in Phase 1)

To protect the MVP from over-engineering, the following are explicitly excluded from Phase 1:
- ❌ No external state libraries (Redux, Zustand, MobX) — standard React state & hooks first.
- ❌ No CRDTs (Yjs/Automerge) — server-authoritative state + optimistic UI is sufficient.
- ❌ No custom WebSocket servers or Redis clusters.
- ❌ No heavy ORMs with migration complexity — start with clean SQL migrations + Supabase JS SDK.
- ❌ No Docker / Kubernetes / Microservices — standard local 
pm run dev and Supabase CLI.
- ❌ No audio/video streaming, AI planning, or calendar integrations.

---

## Consequences

### Positive Consequences
- Rapid development cycle for Phase 1 MVP.
- Clean separation between persistent database facts, ephemeral presence, and derived UI countdowns.
- Transferable engineering skills: SQL, TypeScript, React, and relational design.
- Zero server maintenance overhead.

### Negative Consequences / Tradeoffs Accepted
- Dependency on Supabase service availability and client SDK patterns.
- Realtime events rely on Supabase WebSocket infrastructure rather than custom low-level socket protocol tuning.
- Next.js serverless execution requires stateless API architecture (no persistent background Node.js memory timers; timers must be timestamp-based).

---

## Implementation Boundary

1. **Coding Mode** will configure the Next.js project with TypeScript and Tailwind CSS.
2. **Coding Mode** will initialize the Supabase client helper modules (@supabase/supabase-js, @supabase/ssr).
3. Database migrations will be written in pure SQL under supabase/migrations/.

---

## Learning Notes (Teacher Mode Connection)

Before and during implementation, developers should review the following with Teacher Mode:
- **Lesson 002:** Client vs Server in Next.js (App Router, Server Components vs 'use client').
- **Lesson 003:** Relational Modeling in PostgreSQL (Tables, Primary Keys, Foreign Keys, Cascades).
- **Lesson 004:** WebSockets & Realtime Architecture (Channels, Broadcast, Presence, CDC).
- **Lesson 005:** Authoritative Timestamp Timers vs Drift-Prone Client Intervals.

---

## Future Reconsideration Trigger

Revisit this stack if:
1. Room concurrency exceeds 500 simultaneous active editors per single room requiring sub-10ms peer-to-peer data channels (WebRTC / custom binary protocol).
2. Advanced offline-first peer-to-peer editing becomes a core product requirement requiring client-side CRDTs.
3. Enterprise self-hosting requirements demand detached infrastructure without Supabase dependencies.
