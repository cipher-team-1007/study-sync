# StudySync — Phased Product Roadmap

This roadmap structures the sequential evolution of StudySync by separating **Product Milestones** (user-facing value delivery) from **Engineering Learning Phases** (incremental technical construction).

---

## 🗺️ Product Milestones vs. Engineering Phases

```text
PRODUCT MILESTONES                           ENGINEERING LEARNING PHASES
══════════════════                           ═══════════════════════════
Milestone 0: Foundation                     └── Phase 0: Product & Architecture Standards
    │
Milestone 1: Planning Workspace             └── Phase 1: Interactive Horizontal Timeline
    │
Milestone 2: THE MAGIC MOMENT               ┌── Phase 2: Shared Room Foundation
  (Create → Share → Join →                  ├── Phase 3: Realtime Timeline Collaboration
   See → Start → Sync)                      └── Phase 4: Synchronized Timer Execution
    │
Milestone 3: Review & Session History       └── Phase 5: Structured Review & Persistence
    │
Milestone 4: Advanced Collaboration         └── Phase 6: Granular Roles & Group Dynamics
    │
Milestone 5: Future Expansion               └── Phase 7: Templates, Integrations & Smart Tools
```

---

## 🎯 Detailed Product Milestones

### Milestone 0: Foundation
* **Goal**: Establish clear product goals, scope boundaries, anti-audiences, and architectural decision standards.
* **Engineering Phase 0**: Project setup, multi-mode docs (`product`, `architecture`, `engineering`, `teacher`), and ADR templates.

### Milestone 1: Planning Workspace
* **Goal**: A user can intuitively plan a study session on a visual horizontal timeline.
* **Features**:
  * Set total session duration (e.g., 2 hours).
  * Render horizontal time grid with slot markers.
  * Add, split, reorder, and resize study blocks and break blocks.
* **Engineering Phase 1**: Local client-side timeline state management and drag/resize UI.

### Milestone 2: THE MAGIC MOMENT (Collaborative Live Session — MVP Core)
* **Goal**: Deliver the end-to-end collaborative experience between two study partners.
* **The Magic Moment Loop**:
  $$\text{Create Session} \longrightarrow \text{Share Link} \longrightarrow \text{Peer Joins} \longrightarrow \text{Both See Plan} \longrightarrow \text{Start Session} \longrightarrow \text{Both Stay Synchronized}$$
* **Engineering Phases**:
  * **Phase 2 (Shared Room Foundation)**: Generate shareable room URL; allow peer to join with a display name (no account required for participant); basic presence indicator (online/offline).
  * **Phase 3 (Realtime Collaboration)**: Real-time broadcast of timeline tasks and edits across connected clients.
  * **Phase 4 (Synchronized Execution)**: Authoritative synchronized timer controls (Start, Pause, Resume, Skip); active block highlighting across both screens; session completion state.

> [!IMPORTANT]
> **MVP Completion Rule**: Phases 2, 3, and 4 are not separate standalone product releases. The app is only declared **MVP-Ready** when the full Magic Moment (Milestone 2) works reliably end-to-end.

### Milestone 3: Review & Session History
* **Goal**: Help study partners reflect on session performance after execution finishes.
* **Core Review Questions**:
  * What did we plan?
  * What did we actually complete?
  * Where did we fall behind or pause?
  * How much focused time did each block receive?
* **Engineering Phase 5**: Post-session summary screen, completion logs, and local/account-backed session history.

### Milestone 4: Advanced Collaboration
* **Goal**: Expand support from 2 study partners to small 3–5 person study groups with enhanced room dynamics.
* **Features**:
  * Granular room controls (optional permission delegation to participants).
  * Typing / editing indicators (advanced presence).
  * Quick reaction emojis during scheduled rest breaks.
* **Engineering Phase 6**: Room role authorization policies and multi-peer conflict handling.

### Milestone 5: Future Expansion
* **Goal**: Address broader study workflows based on actual user demand.
* **Potential Capabilities**:
  * Saved study templates (e.g., standard Pomodoro, 50/10 split, deep work 90 min).
  * Calendar integration (Google Calendar, iCal export).
  * Optional AI-assisted task breakdown recommendations.
* **Engineering Phase 7**: Third-party APIs, template persistence, and intelligent scheduling helpers.

---

## 🛡️ Scope Discipline Rule

Do not begin work on Milestone 3 (Review History), Milestone 4 (Advanced Collaboration), or Milestone 5 (Expansion) until Milestone 2 (**THE MAGIC MOMENT**) is robust, reliable, and verified with real study pairs.
