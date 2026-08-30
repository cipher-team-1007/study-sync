# ADR-002 — Timestamp-Driven Authoritative Timer State Model

## Status

**Proposed**

## Date

2026-08-30

## Context

StudySync is a collaborative real-time study room where multiple participants (Host and Peers) execute a shared timeline in synchronized focus and break intervals.

A fundamental engineering challenge is keeping timers across distributed clients in perfect synchronization. When two users look at the same active focus block, they must see identical countdowns and state transitions without:
1. Clock drift caused by individual computer clocks.
2. Desynchronization caused by browser tab sleep, OS throttling of background timers, or network latency spikes.
3. Overwhelming the network/WebSocket connection by streaming 1-second ticks continuously to every connected client.
4. Loss of truth when a user refreshes their page or temporarily loses connection.

## Constraints

- **Developer Skill Level:** Two beginner developers learning distributed state concepts, relational database modeling, and WebSocket event flows.
- **Infrastructure:** Serverless / BaaS architecture (Next.js + Supabase). We avoid persistent long-lived server processes or in-memory timer intervals for MVP simplicity.
- **Multi-Client Consistency:** State must remain deterministic across multiple concurrent browser tabs and remote network connections.

## Options Considered

### Option 1: Client-Driven `setInterval` with Frequent WebSocket Sync
- **Description:** One client (the host) runs a standard JavaScript `setInterval(() => count--, 1000)` and pushes the remaining seconds to the server/peers every second or every few seconds.
- **Pros:** Conceptually simple for beginners to grasp initially.
- **Cons:** Extremely fragile. Browser background throttling pauses `setInterval` when the tab is inactive; network jitter produces visual stutter and out-of-order ticks; if the host closes their laptop, the session timer halts for all peers.
- **Complexity:** Low initial, High maintenance/failure rate.

### Option 2: Centralized Server-Side Interval Broadcasts
- **Description:** A dedicated server process (Node.js/Redis) runs an active timer tick and broadcasts a tick message over WebSockets every second to all room participants.
- **Pros:** Centralized authority prevents client clock tampering.
- **Cons:** Requires managing persistent backend server infrastructure (incompatible with serverless deployment); introduces significant network bandwidth overhead; high WebSocket message volume even during quiet focus blocks.
- **Complexity:** High.

### Option 3: Server-Authoritative Timestamp State Model with Local Mathematical Derivation
- **Description:** Timers are represented as authoritative immutable state facts in the database (`status`, `started_at`, `duration_seconds`, `paused_at`, `elapsed_seconds_at_pause` / `accumulated_paused_ms`). The server records transitions (START, PAUSE, RESUME, SKIP, COMPLETE) and broadcasts state change events. Each client deterministically derives the remaining time locally using `Date.now()` against the canonical timestamps.
- **Pros:**
  - Zero ongoing WebSocket traffic during focus intervals.
  - Immune to browser background throttling; resuming an inactive tab instantly computes the correct remaining time.
  - Full resilience on reconnection: fetching the current session snapshot instantly recovers exact timer progress.
  - Operations are idempotent and serverless-friendly.
- **Cons:** Requires understanding epoch math and handling client-server clock offset edge cases.
- **Complexity:** Medium (Sound engineering with high educational value).

---

## Decision

We propose adopting **Option 3: Server-Authoritative Timestamp State Model with Local Mathematical Derivation** as StudySync's core timer synchronization architecture.

### Architectural Invariants & Rules

1. **Server-Authoritative State:** Client UI is a reflection of authoritative server/database state. Client clocks and local timers never dictate truth.
2. **Timestamp-Driven Calculations:** Timers are calculated from epoch timestamps (`started_at`, `duration_seconds`, `paused_at`, `elapsed_seconds_at_pause`), never fragile local `setInterval` counters.
3. **Resilient Reconnection:** Any participant who refreshes or suffers network interruption receives the complete, canonical session snapshot upon reconnecting.
4. **Idempotent Operations:** State transitions (`START`, `PAUSE`, `RESUME`, `SKIP`, `COMPLETE`) must be deterministic and safe against duplicate or out-of-order events.
5. **Explicit Server Authorization:** Never rely solely on client-side UI disabling for permission enforcement. All room actions (start, pause, edit) must be authorized at the database/backend layer.
6. **Strict Input Validation:** Validate all parameters (task duration, string length, room codes, timestamps) on both client and server.

---

## Rationale (Why)

1. **Reliability:** Timestamp math is mathematically deterministic. If a study block starts at `14:00:00` for 25 minutes (`1500s`), at `14:10:00` exactly 900 seconds remain, regardless of whether a user's tab was asleep, minimized, or disconnected.
2. **Efficiency:** Eliminates unnecessary WebSocket event flooding. Network messages are exchanged only when state transitions happen (Start, Pause, Resume, Skip).
3. **Architectural Purity:** Aligns with standard modern distributed systems patterns where facts are recorded and projections/views are derived deterministically.

---

## Consequences

### Positive Consequences
- Rock-solid synchronization between host and peers.
- Zero battery/network drain from continuous timer broadcasts.
- Seamless recovery from network drops or page reloads.
- Strong security posture with explicit backend authorization.

### Negative Consequences / Tradeoffs Accepted
- Requires client components to compute elapsed seconds from epoch timestamps instead of using simple countdown counters.
- Client timezones or severe client device clock skews must be mitigated (e.g. normalizing against server timestamp on snapshot load).

---

## Implementation Boundary

- **Database Layer (`study_sessions` table):**
  - `status` (`'idle' | 'running' | 'paused' | 'completed'`)
  - `started_at` (Timestamp / ISO string)
  - `paused_at` (Timestamp / ISO string, nullable)
  - `elapsed_seconds_at_pause` (Integer, default 0)
  - `active_task_id` (UUID, nullable)
- **Frontend Layer (`useTimer` hook):**
  - Derives `remainingSeconds = durationSeconds - elapsedSeconds` locally.
  - Subscribes to room Realtime channel for transition events (`SESSION_STARTED`, `SESSION_PAUSED`, etc.).

---

## Learning Notes (Teacher Mode Connection)

Key concepts the developers should review with Teacher Mode:
- **Epoch Timestamps & Date Math:** How UNIX timestamps work across distributed clients.
- **Server Authority vs Client Derivation:** Why servers store facts while clients render projections.
- **Idempotency:** Designing operations that produce the same result even if called multiple times.
- **Clock Drift & Latency Compensation:** Understanding local clock vs server clock differences.

---

## Future Reconsideration Trigger

Revisit this decision if:
- Advanced sub-second precision synchronization (e.g., synchronized audio playback) is introduced in later phases.
- Real-time collaborative multi-host timer steering is required.
