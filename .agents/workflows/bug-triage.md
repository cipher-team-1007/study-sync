# Workflow: Bug Triage & Root Cause Resolution

This workflow outlines the step-by-step protocol for reproducing, analyzing, fixing, and verifying bugs in StudySync.

---

## 🔁 Triage & Fix Pipeline

```text
┌────────────────┐     ┌────────────────┐     ┌────────────────┐
│ 1. REPRODUCE   │ ──► │ 2. ISOLATE     │ ──► │ 3. LOG REPORT  │
│ Consistent run │     │ Layer & root   │     │ docs/testing/  │
└────────────────┘     └────────────────┘     └────────────────┘
                                                       │
                                                       ▼
┌────────────────┐     ┌────────────────┐     ┌────────────────┐
│ 6. CLOSE / REC │ ◄── │ 5. VERIFY REG  │ ◄── │ 4. REPAIR      │
│ Audit & signoff│     │ Multi-client QA│     │ Engineer fix   │
└────────────────┘     └────────────────┘     └────────────────┘
```

---

## 📌 Standard Process

1. **Reproduction (Tester Mode):** Establish exact deterministic steps to trigger the defect.
2. **Layer Isolation (Debugger Mode):** Identify failing layer (Frontend state, WebSocket payload, Database constraint, Network race).
3. **Log Bug Report:** File standardized report under `docs/testing/bug-reports/` with severity and evidence.
4. **Targeted Repair (Engineer Mode):** Implement the smallest, cleanest fix that eliminates the defect without altering architectural invariants.
5. **Regression Verification (Debugger / Tester Mode):** Execute multi-client tests and ensure existing workflows remain intact.
6. **Review Signoff (Reviewer Mode):** Audit the fix for correctness and mark bug report as resolved.
