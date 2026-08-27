# PDR-002 — Session Ownership & Low-Friction Guest Access

## Status

**Accepted**

---

## Context

When two students want to study together, high friction at the point of joining (e.g. requiring both users to create accounts, verify emails, and set passwords) dramatically reduces the likelihood of completing the "magic moment" loop.

Furthermore, introducing granular multi-user role management, simultaneous timeline editing conflicts, and competing timer controls (e.g., both users spamming pause/play) adds immense architectural complexity for two beginner developers.

---

## Decision

1. **Host (Owner) Authentication Required**:
   * The user creating the room must be authenticated.
   * Host has full authoritative control over timeline planning and timer execution (Start, Pause, Resume, Skip).
2. **Frictionless Participant Access (Display Name Only)**:
   * The invited study partner does **not** need an account for the MVP prototype.
   * Participant joins simply by clicking the link and entering a display name.
3. **Session Ownership Boundary**:
   * **Owner**: Creates session, edits timeline, controls timer states.
   * **Participant**: Sees live visual timeline, receives real-time sync, follows synchronized countdown timer.
   * Granular permission delegation (e.g., granting the participant edit rights) is postponed to Milestone 4.

---

## Consequences

- **Positive**:
  - The magic moment (Create $\rightarrow$ Share $\rightarrow$ Join $\rightarrow$ Start $\rightarrow$ Sync) takes seconds instead of minutes.
  - Zero timer conflict resolution bugs or race conditions between competing controllers in MVP.
  - Clear architectural boundaries for Architect Mode to implement secure token/session handling.
- **Negative**:
  - Unauthenticated participants cannot persist personal study statistics across multiple browser sessions without later linking an account (deferred to Milestone 3).
