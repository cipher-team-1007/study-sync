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
