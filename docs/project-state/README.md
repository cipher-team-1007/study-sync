# StudySync — Project State Management

This directory serves as the centralized repository memory for project-level development state, managed primarily by the **Orchestrator Agent** (`studysync-orchestrator`).

---

## 📂 Directory Contents

| File | Purpose | Updated By |
| :--- | :--- | :--- |
| **[`current-phase.md`](file:///current-phase.md)** | Tracks the active product milestone and engineering learning phase. | Orchestrator / Human Developers |
| **[`current-task.md`](file:///current-task.md)** | Single source of truth for the currently executing development task, stage, required agents, and acceptance criteria. | Orchestrator |
| **[`open-issues.md`](file:///open-issues.md)** | Registry of active blockers, architectural questions, remediation loops, and unresolved items. | Orchestrator / Reviewer / Debugger |

---

## 🎯 Governance Rules

1. **Single Source of Truth:** `current-task.md` prevents agents from creating contradictory task statuses or overlapping execution plans.
2. **Phase Alignment:** All tasks must map explicitly to the active phase described in `current-phase.md`.
3. **Artifact-Driven Coordination:** Specialists record their handoffs in their respective doc directories (`docs/product/`, `docs/architecture/`, `docs/engineering/`, `docs/testing/`, `docs/reviews/`, `docs/teacher/`), and the Orchestrator references them here.
