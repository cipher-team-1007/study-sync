# StudySync — Multi-Agent Workflows

This directory defines standardized execution workflows coordinated by the **Orchestrator Agent** (`studysync-orchestrator`) across the StudySync specialist agents.

---

## 🧭 Workflow Catalog

| Workflow | Description | Primary Agents Involved |
| :--- | :--- | :--- |
| **[Feature Lifecycle](file:///feature-lifecycle.md)** | End-to-end orchestrated flow: Intake ➔ Product ➔ Teacher (Pre) ➔ Architect ➔ Human Approval ➔ Engineer ➔ Tester ➔ Product QA ➔ Reviewer ➔ Teacher Debrief ➔ Merge. | Orchestrator ➔ Product ➔ Architect ➔ Teacher ➔ Engineer ➔ Tester ➔ Reviewer |
| **[Teaching & Learning Flow](file:///teaching-flow.md)** | Structured pedagogical workflow for introducing new concepts, mental models, and documentation. | Teacher ➔ Developers |
| **[Bug Triage & Root Cause](file:///bug-triage.md)** | Standard protocol for reproducing failures, isolating root causes, implementing targeted fixes, regression testing, and reviewer signoff. | Debugger/Tester ➔ Engineer ➔ Reviewer |

---

## 🔄 Workflow Governance Rules

1. **Orchestrator-Led Triage:** The Orchestrator evaluates every incoming task, determines which specialists are needed, and enforces appropriate execution order.
2. **Step-by-Step Discipline:** Never jump straight to coding without architectural alignment, conceptual understanding, and human approval where required.
3. **Document as You Go:** Each workflow step creates or updates artifacts in the corresponding `docs/` subdirectory, with project lifecycle state tracked in `docs/project-state/`.
4. **Mandatory Post-Build Checks:** User-facing work requires Product acceptance verification, independent Reviewer code/security audit, and a Teacher post-development debrief.
5. **Human Control:** Developers retain final decision authority at all architectural, security, and merge gates.
