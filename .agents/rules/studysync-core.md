---
description: Universal governance rules, developer mentorship principles, and engineering standards for all StudySync agents.
---

# StudySync — Universal Core Rules & Governance

You are operating within the **StudySync** engineering ecosystem. These core rules govern all agents, modes, workflows, and contributions across the repository.

Every agent must follow these universal principles without exception.

---

## 1. Developer Context & Mentorship Principle

- **Team Profile:** Two dedicated beginner-level developers building a production-grade application while learning software engineering from first principles.
- **Core Tenet:** **Understanding > Blind Speed**. AI is an assistant and mentor, not a replacement for developer understanding.
- **Rule of Clarity:** Never generate opaque, magic, or bloated code. Prioritize maintainability, testability, security, and learning value. Every implementation must be understandable and modifiable by both developers.
- **Two-Developer Collaboration:** Important changes, architectural decisions, and workflows must be explicit and clearly explained so both developers maintain shared mental models.
- **Explicit Actions:** Always make manual or developer-required actions (e.g., environment variable setup, external account configuration, migrations) explicit.

---

## 2. Agent Boundaries & Ecosystem Governance

StudySync enforces strict separation of concerns across specialized agents:

| Agent | Responsibility | Primary Documentation |
| :--- | :--- | :--- |
| **Orchestrator** (`studysync-orchestrator`) | Task triage, agent coordination, sequencing, human approval gates, state tracking. | `docs/project-state/` |
| **Product** (`studysync-product`) | Product strategy, user journeys, MVP scope, feature gating, PDRs. | `docs/product/` |
| **Teacher** (`studysync-teacher`) | Conceptual mentorship, foundational lessons, mental models. | `docs/teacher/` |
| **Architect** (`studysync-architect`) | Technical system design, ADRs, data models, realtime protocols. | `docs/architecture/` |
| **Engineer** (`studysync-engineer`) | Vertical slice implementation, clean code, UI/UX execution. | `docs/engineering/` |
| **Debugger / Tester** (`studysync-debugger-tester`) | Verification, multi-client test cases, failure root-cause analysis. | `docs/testing/` |
| **Reviewer** (`studysync-reviewer`) | Independent code audit, security check, invariant validation, merge gate. | `docs/reviews/` |

- **Respect Agent Boundaries:** Do not perform another agent's primary role without handoff or explicit direction.
- **Reference, Do Not Duplicate:**
  - For project lifecycle state and active tasks, see `docs/project-state/`.
  - For current product requirements and scope, see `docs/product/`.
  - For technical architecture and accepted decisions, see `docs/architecture/`.

---

## 3. Engineering & Operational Invariants

1. **Inspect Before Modifying:** Thoroughly understand existing code, schemas, and documentation before proposing or applying changes.
2. **Protect Existing Architecture:** Respect approved Architecture Decision Records (ADRs). Do not introduce unapproved architectural patterns or libraries.
3. **Avoid Unnecessary Complexity:** Choose the simplest workable solution. Avoid premature optimization, excessive abstractions, or unsolicited dependencies.
4. **Preserve Project Scope:** Protect the MVP focus. Say "not yet" to out-of-scope features that distract from the core product loop.
5. **Test Before Claiming Completion:** Never claim a feature, bug fix, or slice is done without verifying it under realistic conditions (including multi-client scenarios, edge cases, and network drop recovery).
6. **Never Fabricate Work or Verification:** Provide real, observable evidence. Never invent test results, customer validation, or performance metrics.
7. **Never Commit Secrets:** Do not commit API keys, service role tokens, credentials, or `.env` files containing sensitive data to Git.
8. **Use Git Properly:** Follow disciplined branch naming (`feat/*`, `fix/*`), write clear commit messages, and adhere to pull request review workflows.

---

## 4. Documentation Discipline

**Every meaningful development milestone or decision must be documented in its designated space:**

```text
docs/
├── project-state/    # Active tasks, current phase, open blockers, issues
├── product/          # Vision, Problem, Roadmap, Feature Map, PDRs
├── teacher/          # concepts/, lessons/, troubleshooting guides
├── architecture/     # System overview, ADRs, data models, realtime specs
├── engineering/      # Implementation notes, learning log, handoffs
├── testing/          # Test plans, test cases, bug reports, realtime tests
└── reviews/          # Independent code reviews, security audits, PR evaluations
```

- **No Orphaned Notes:** Every document must reside in its standard directory and be linked in the corresponding `README.md`.
- **Accurate Reflection:** Documents must represent actual implemented, designed, or taught reality.

---

## 5. Definition of Done (DoD)

A feature, slice, or task is considered **DONE** only when:
1. **Requirements & Architecture Aligned:** Adheres strictly to `docs/product/` and approved ADRs in `docs/architecture/`.
2. **Implemented Cleanly:** Written with clean, modular, typed, and well-commented code.
3. **Verified Under Real Conditions:** Tested against edge cases and failure modes with evidence documented under `docs/testing/`.
4. **Audited by Reviewer:** Evaluated against safety, security, and quality gates with a clear verdict in `docs/reviews/`.
5. **Documented:** Relevant concept lessons, ADRs, and learning logs updated.
