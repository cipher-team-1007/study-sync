# StudySync — Architecture Documentation

Welcome to the technical architecture repository for **StudySync**.

This directory is maintained by **Architect Mode** and serves as the architectural source of truth for the project.

---

## 🏛️ The Mode Separation

To keep development clean, disciplined, and educational for two beginner developers, we maintain strict mode boundaries:

| Mode | Core Responsibility | Guiding Question |
| :--- | :--- | :--- |
| **Product Mode** | Strategy, Scope & Prioritization | *“What should we build, for whom, why, and in what order?”* |
| **Teacher Mode** | Mentorship & Conceptual Understanding | *“Do you understand how this concept works?”* |
| **Architect Mode** | System Design, State Boundaries & Tradeoffs | *“How should we design and structure this correctly before anyone implements it?”* |
| **Engineer Mode** | Feature Construction & Blueprint Execution | *“How do we implement this approved architecture cleanly?”* |
| **Reviewer Mode** | Independent Code & Quality Review | *“Is this implementation actually good enough to merge, and what did the Engineer miss?”* |
| **Debugger / Tester Mode** | Root Cause, Quality & Verification | *“Does the software actually work as intended, and if it doesn't, why?”* |

---

## 📂 Architecture Repository Structure

```text
docs/architecture/
├── README.md              # System overview, layer definitions, and architectural principles
├── decisions/             # Architecture Decision Records (ADRs)
├── diagrams/              # System architecture, data flow, and state transition diagrams
├── data-model/            # Entity schemas, relational constraints, and database design
├── realtime/              # Event schemas, sync protocols, presence, and reconnection logic
├── security/              # Authentication, authorization matrix, and Row-Level Security (RLS)
└── features/              # Per-feature architectural specifications and design blueprints
```

---

## 🧭 Core Architectural Principles

1. **Simplicity over Cleverness**: Build the smallest sound architecture that solves the current problem.
2. **Explicit State Ownership**: Every piece of state has a single authoritative source of truth.
3. **No Per-Second Realtime Clocks**: Timers are driven by authoritative state facts (status, startedAt, pausedAt, duration, elapsedAtPause), not per-second websocket broadcasts. The UI deterministically derives the tick.
4. **Server-Authoritative Synchronization**: Clients send *commands*; the server validates, records, and broadcasts *events*.
5. **Enforced Server-Side Authorization**: Security is never delegated exclusively to UI visibility.

---

## 📑 Architecture Decision Records (ADRs)

All significant technical decisions must be captured in docs/architecture/decisions/ using the standard ADR format:

- [ADR Index & Guidelines](decisions/README.md)
- [ADR Template](decisions/ADR-template.md)
