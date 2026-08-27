# PDR-001 — MVP Scope Boundary & Feature Scope Protection

## Status

**Accepted**

---

## Problem

StudySync could easily suffer from feature creep if we attempt to build AI planners, social media feeds, gamification leaderboards, ambient music streams, and complex multi-tenant enterprise features before validating the core collaborative study loop.

---

## Context

We are two beginner-level developers building StudySync to solve a clear problem: providing a simple, visual, shared study timeline with synchronized real-time session execution for two study partners ("The Focused Peer Pair").

---

## Options Considered

### Option A: Build a broad multi-feature platform (Pomodoro + Music + AI + Social Feed + Leaderboards)
* **Pros**: Feature-rich presentation.
* **Cons**: Extreme engineering complexity, high risk of bugs, delayed launch, diluted core product value.

### Option B: Tightly scoped MVP focused strictly on Milestone 2 ("The Magic Moment")
* **Pros**: Rapid iteration, clear product differentiation, high quality of core loop, manageable learning curve.
* **Cons**: Defers secondary features (AI, analytics, music sync, granular multi-user permissions) to post-MVP phases.

---

## Decision

We chose **Option B**.

The MVP release is strictly bounded to delivering **Milestone 2: The Magic Moment**:
1. Host session creation & time setup
2. Horizontal visual timeline creation (tasks + breaks)
3. Room creation & URL sharing
4. Frictionless peer join via display name & basic online/offline presence
5. Real-time timeline sync
6. Synchronized timer controls (Start, Pause, Resume, Skip) owned by Host
7. Session completion review summary

---

## Explicitly Postponed / Rejected for MVP

- AI automatic session generation
- Social feeds and global user leaderboards
- Spotify / Apple Music / ambient audio integrations
- Native mobile applications
- Enterprise / Classroom teacher dashboards
- Granular multi-role permission managers

---

## Consequences

- **Positive**: High code quality, clear architecture, fast iteration, high learning value for both developers.
- **Negative**: Users looking for built-in Spotify, complex roles, or AI task splitters must wait until Post-MVP phases.

---

## Revisit When

Revisit after Milestone 2 (The Magic Moment) is complete, tested by real study pairs, and validated as reliable and enjoyable to use.
