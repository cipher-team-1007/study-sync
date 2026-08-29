# StudySync — Feature Categorization & Scope Map

This document maps all product features by priority category (`CORE / MVP`, `IMPORTANT`, `LATER`, `REJECT / NOT NOW`) and establishes explicit ownership and presence boundaries.

---

## 🎯 MVP Feature Scope (Milestone 1 & 2)

| Category | Feature | Description | MVP Behavior |
| :--- | :--- | :--- | :--- |
| **Room Creation** | Host Account & Room Setup | Host logs in, sets session duration, generates shareable room URL | Host account required |
| **Room Access** | Low-Friction Peer Join | Peer opens URL, enters display name, immediately enters room | No account required for peer |
| **Timeline** | Horizontal Task Grid | Visual timeline layout with time slot markers for study & break blocks | Visual drag/resize/reorder |
| **Realtime** | Timeline State Sync | Broadcasts task additions, edits, and reordering in real time | Instant peer updates |
| **Timer** | Synchronized Control | Authoritative countdown state (Start, Pause, Resume, Skip) | Synchronized across clients |
| **Presence** | Basic Member Status | Displays connected participants and active/idle state | Online / Offline indicator |
| **Ownership** | Default Session Ownership | Clear role split between session Host and invited Participant | Host: Full Control; Participant: View + Sync |

---

## 🔑 Session Ownership Model (MVP Default)

To keep the MVP simple, reliable, and free from complex role-management bugs:

```text
Room Owner (Host)
     ├── Creates room & timeline agenda
     ├── Controls timer (Start, Pause, Resume, Skip)
     └── Edits timeline tasks/durations

Participant (Peer)
     ├── Joins via link with display name
     ├── Sees live visual timeline & active task
     └── Follows synchronized countdown timer
```

* **Who can START / PAUSE / RESUME / SKIP?** `Owner` only (MVP default).
* **Who can edit timeline tasks?** `Owner` only (MVP default).
* **Who can participate and view?** `Participant` and `Owner`.

---

## 📡 Presence Terminology Hierarchy

We use **Presence** as the single umbrella concept:

* **Presence (MVP)**:
  * **Online / Offline**: Real-time indicator showing if the study partner is currently in the room.
* **Presence (Post-MVP Expansion)**:
  * **Typing / Editing indicators**: Shows when a user is editing a task name.
  * **Custom statuses**: Quick focus status (e.g., "Reading Ch. 2", "In Flow").

---

## 🚀 Post-MVP & Future Expansions

### Milestone 3 (Review & Session History)
- Structured session review summary (planned vs. actual, focus time, pause breakdown).
- Persistent session logs & accomplishments list.

### Milestone 4 (Advanced Collaboration)
- Granular permissions (option for Owner to grant Participant edit or timer control).
- 3–5 participant multi-peer rooms.
- Advanced presence (typing/editing indicators).
- Break-time reaction emojis.

### Milestone 5 (Future Expansion)
- Reusable study templates (Pomodoro, 50/10, Deep Work).
- Google Calendar / iCal export.
- Optional AI-assisted task breakdown & study scheduling.

---

## 🚫 Rejected / Non-Goals for Early Product

- Native video/audio calling (use Discord/Zoom/Meet alongside).
- General task backlog management (Notion/Todoist clone).
- Public social feeds and follower graphs.
- Embedded music streaming (Spotify/Apple Music players).
- Large classroom/teacher grading dashboards.
