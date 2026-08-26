# PDR-001 — MVP Scope Boundary & Feature Scope Protection

## Status

**Accepted**

---

## Problem

StudySync could easily suffer from feature creep if we attempt to build AI planners, social media feeds, gamification leaderboards, ambient music streams, and complex multi-tenant enterprise features before validating the core collaborative study loop.

---

## Context

We are two beginner-level developers building StudySync to solve a clear problem: providing a simple, visual, shared study timeline with synchronized real-time session execution for study partners and small study groups.

---

## Options Considered

### Option A: Build a broad multi-feature platform (Pomodoro + Music + AI + Social Feed + Leaderboards)
* **Pros**: Feature-rich presentation.
* **Cons**: Extreme engineering complexity, high risk of bugs, delayed launch, diluted core product value.

### Option B: Tightly scoped MVP focused strictly on visual timeline + real-time room sync + synchronized timer
* **Pros**: Rapid iteration, clear product differentiation, high quality of core loop, manageable learning curve.
* **Cons**: Defers secondary features (AI, analytics, music sync) to post-MVP phases.

---

## Decision

We chose **Option B**.

The MVP release is strictly bounded to:
1. Session creation & time setup
2. Horizontal visual timeline creation (tasks + breaks)
3. Room creation & URL sharing
4. Peer join & basic presence indicator
5. Realtime timeline sync
6. Synchronized timer controls (Start, Pause, Resume, Skip)
7. Session completion state

---

## Explicitly Postponed / Rejected for MVP

- AI automatic session generation
- Social feeds and global user leaderboards
- Spotify / Apple Music / ambient audio integrations
- Native mobile applications
- Enterprise / Classroom teacher dashboards

---

## Consequences

- **Positive**: High code quality, clear architecture, fast iteration, high learning value for both developers.
- **Negative**: Users looking for built-in Spotify or AI task splitters must wait until Post-MVP phases.

---

## Revisit When

Revisit after Phase 4 (Synchronized Execution) is complete, tested by real study pairs, and validated as reliable and enjoyable to use.
