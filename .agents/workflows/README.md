# StudySync — Multi-Agent Workflows

This directory defines standardized execution workflows that coordinate the 6 StudySync modes.

---

## 🧭 Workflow Catalog

| Workflow | Description | Primary Agents Involved |
| :--- | :--- | :--- |
| **[Feature Lifecycle](file:///feature-lifecycle.md)** | End-to-end flow for proposing, designing, teaching, implementing, testing, and reviewing new features. | Product ➔ Architect ➔ Teacher ➔ Engineer ➔ Tester ➔ Reviewer |
| **[Teaching & Learning Flow](file:///teaching-flow.md)** | Structured pedagogical workflow for introducing new concepts, mental models, and documentation. | Teacher ➔ Developers |
| **[Bug Triage & Root Cause](file:///bug-triage.md)** | Standard protocol for reproducing failures, isolating root causes, implementing fixes, and regression testing. | Debugger/Tester ➔ Engineer ➔ Reviewer |

---

## 🔄 Workflow Governance Rules

1. **Step-by-Step Discipline:** Never jump straight to coding without architectural alignment and conceptual understanding.
2. **Document as You Go:** Each workflow step creates or updates artifacts in the corresponding `docs/` subdirectory.
3. **Quality Gates:** No feature merges or completes without explicit sign-off from Debugger/Tester and Reviewer modes.
