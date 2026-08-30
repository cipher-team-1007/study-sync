# Workflow: Orchestrated Feature Lifecycle (End-to-End)

The Feature Lifecycle coordinates the StudySync development team through a disciplined, conditional multi-agent pipeline managed by the **Orchestrator Agent** (`studysync-orchestrator`).

It ensures every feature is properly scoped, architected, understood by beginner developers, implemented cleanly, tested under real-world conditions, validated by Product, audited by Reviewer, debriefed by Teacher, and gated by human approval.

---

## 🔁 Orchestrated Pipeline Flow

```text
┌────────────────────────────────────────────────────────────────────────┐
│ 1. INTAKE (Orchestrator)                                               │
│    Triage task, select minimal agents, init docs/project-state/        │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 2. PRODUCT SPECIFICATION (Product — conditional)                       │
│    Scope, user story, acceptance criteria in docs/product/             │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 3. TEACHER PRE-LEARNING (Teacher — conditional)                        │
│    Core concept primers in docs/teacher/                               │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 4. ARCHITECTURE & ADR (Architect — conditional)                        │
│    Data models, protocols, state ownership, ADRs in docs/architecture/ │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 5. 🛑 HUMAN APPROVAL GATE (Required for ADRs, migrations, security)     │
│    Human developer review & approval before coding                     │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 6. VERTICAL SLICE IMPLEMENTATION (Engineer)                            │
│    Clean, typed code, tests, docs/engineering/ handoffs                │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 7. VERIFICATION & QA (Debugger / Tester)                               │
│    Multi-client tests, edge cases, failure isolation, docs/testing/    │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 8. POST-BUILD PRODUCT ACCEPTANCE (Product — mandatory for user-facing) │
│    Verify UX matches intent, acceptance criteria signoff               │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 9. INDEPENDENT CODE & SECURITY AUDIT (Reviewer)                        │
│    Invariant check, RLS/security audit, merge readiness in docs/reviews│
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
         ┌─────────────────────────┴─────────────────────────┐
         │ (If failures, defects, or changes requested)     │
         ▼                                                   │
┌─────────────────────────────────────────┐                 │
│ 10. REMEDIATION LOOP (Max 2 iterations) │                 │
│     Engineer/Debugger fix ➔ QA ➔ Review │                 │
└─────────────────────────────────────────┘                 │
                                   ┌─────────────────────────┘
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 11. 🎓 TEACHER POST-EXECUTION DEBRIEF (Teacher — Core Requirement)     │
│     13-point comprehensive lesson in docs/teacher/lessons/             │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 12. FINAL VERIFICATION & STATE UPDATE (Orchestrator)                   │
│     Update docs/project-state/current-task.md to COMPLETED             │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 13. 🛑 HUMAN APPROVAL GATE FOR MERGE & GIT CONTROL                     │
│     Developer inspects diff, test evidence, and approves merge         │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 📌 Detailed Step-by-Step Protocol

### Step 1: Intake & Triage (Orchestrator)
- **Action:** Inspect user request, project phase (`docs/project-state/current-phase.md`), existing docs, and repo diff. Classify task type and select the minimal set of agents required.
- **Output:** Initialize active task record in `docs/project-state/current-task.md`.

### Step 2: Product Analysis & Acceptance Criteria (Product Mode)
- **Condition:** Required when task changes user-facing behavior, workflows, requirements, or MVP boundaries.
- **Action:** Define user problem, story, goal, explicit non-goals, expected behavior, acceptance criteria, and edge cases.
- **Output:** PDR or user story under `docs/product/` with clear acceptance criteria.

### Step 3: Teacher Pre-Learning Primer (Teacher Mode)
- **Condition:** Required when developers are about to use unfamiliar concepts (e.g. WebSockets, RLS, CRDT vs Server Authoritative, timer drift).
- **Action:** Provide a concise conceptual lesson before coding begins so developers understand the *why*.
- **Output:** Concept doc in `docs/teacher/concepts/`.

### Step 4: Architecture Design & ADR (Architect Mode)
- **Condition:** Required for database changes, API routes, realtime protocols, state ownership, auth/security, or refactoring.
- **Action:** Design minimal robust technical solution, data models, state ownership, and concurrency model.
- **Output:** Approved ADR in `docs/architecture/decisions/` and schemas in `docs/architecture/`.

### Step 5: Human Approval Gate (Human Developers)
- **Condition:** Mandatory for new architectural decisions, destructive schema alterations, auth/security changes, major dependencies, or scope changes.
- **Action:** Present design and tradeoffs to developers. Await explicit human confirmation.

### Step 6: Implementation (Engineer Mode)
- **Action:** Implement focused vertical slice adhering strictly to approved ADR and product requirements. Add input validation, unit/integration tests, and verify locally.
- **Output:** Application code and handoff notes in `docs/engineering/feature-handoffs/`.

### Step 7: Verification & Quality Assurance (Debugger / Tester Mode)
- **Action:** Run happy path, boundary limits, invalid inputs, multi-client realtime tests, reconnects, and network drops.
- **Output:** Test execution report in `docs/testing/` with explicit status (`PASS`, `PASS WITH KNOWN LIMITATIONS`, `FAIL`, `BLOCKED`, `NOT VERIFIED`).

### Step 8: Post-Build Product Acceptance Check (Product Mode)
- **Condition:** Mandatory for user-facing feature work.
- **Action:** Validate built experience against the intended UX and acceptance criteria from Step 2. Verify no unapproved behavioral deviations occurred.
- **Output:** Product acceptance verdict (`ACCEPTED`, `ACCEPTED WITH CHANGES`, `REJECTED`) in `docs/product/`.

### Step 9: Independent Code & Security Audit (Reviewer Mode)
- **Action:** Independently inspect diffs, test evidence, architecture compliance, security (RLS, secrets), code quality, and maintainability.
- **Output:** Formal review report in `docs/reviews/` (`APPROVE`, `APPROVE WITH CHANGES`, `REQUEST CHANGES`, `BLOCK`).

### Step 10: Remediation Loop
- **Action:** Route defects back to Engineer or Debugger for resolution. Re-run QA and Review.
- **Circuit Breaker:** If remediation fails after 2 cycles, halt immediately, log blockers in `docs/project-state/open-issues.md`, and request human developer intervention.

### Step 11: Teacher Post-Execution Debrief (Teacher Mode)
- **Condition:** Mandatory after successful completion of meaningful features.
- **Action:** Inspect actual development (`git diff`, changed files, ADRs, test reports, review findings). Deliver 13-point debrief connecting runtime flows to StudySync's user experience.
- **Output:** Persistent lesson file under `docs/teacher/lessons/<feature>-development-debrief.md`.

### Step 12: Final Verification & State Wrap-up (Orchestrator)
- **Action:** Verify all documentation links, confirm DoD criteria are met, update `docs/project-state/current-task.md` to `COMPLETED`.

### Step 13: Human Merge Approval & Git Control
- **Action:** Developers review `git status` and `git diff`. Verify no secrets or unintended files are staged. Confirm merge.
