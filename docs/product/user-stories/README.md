# StudySync — User Stories & Acceptance Criteria

This repository contains behavior-focused user stories for StudySync product features, aligned with our Product Milestones and Session Ownership model.

---

## Story Format

```markdown
As a <user>,
I want to <action>,
so that <value>.
```

---

## MVP User Stories (Milestones 1 & 2: The Magic Moment)

### US-001: Create Study Session & Timeline (Milestone 1)
**As a** student host,  
**I want to** specify a total session time and divide it into visual study blocks and breaks on a horizontal timeline,  
**so that** my study partner and I have a clear visual schedule.

**Acceptance Criteria:**
- [ ] Host must be authenticated to create a session room.
- [ ] Host can define session duration (e.g. 2 hours).
- [ ] Timeline renders as a horizontal grid displaying clear time slots.
- [ ] Host can add study tasks and rest break blocks to the timeline.
- [ ] Host can adjust block duration by dragging or editing duration inputs.
- [ ] Total tasks + breaks duration equals or fits within total session time.

---

### US-002: Frictionless Share & Join via URL (Milestone 2 / Phase 2)
**As a** study partner receiving a room link,  
**I want to** enter my display name and join the room instantly without creating an account or verifying an email,  
**so that** we can start studying together without delay.

**Acceptance Criteria:**
- [ ] Host can copy a unique room URL (`/room/:id`).
- [ ] Joiner opening the URL is prompted only for a display name.
- [ ] Upon submitting display name, participant enters the room and sees the exact visual timeline.
- [ ] Presence indicator updates to show both users as **Online** on both screens.

---

### US-003: Synchronized Execution & Session Ownership (Milestone 2 / Phases 3 & 4)
**As a** room participant,  
**I want** timer actions (Start, Pause, Resume, Skip) initiated by the Host to synchronize immediately across both browsers,  
**so that** we stay on the exact same study block and countdown clock without confusion.

**Acceptance Criteria:**
- [ ] Only the **Host (Owner)** can trigger Start, Pause, Resume, and Skip controls by default.
- [ ] When Host clicks **Start**, countdown timer begins simultaneously on both clients.
- [ ] Active task block is visually highlighted on the horizontal timeline for both users.
- [ ] When Host clicks **Pause**, timers freeze on both clients and status displays as `PAUSED`.
- [ ] When Host clicks **Resume**, timers restart in unison.
- [ ] When active block timer reaches 00:00 (or Host clicks **Skip**), focus automatically transitions to the next block on the timeline.

---

### US-004: Structured Session Review (Milestone 3 / Phase 5)
**As a** study pair completing a session,  
**I want to** view a structured summary comparing our planned timeline against our actual execution,  
**so that** we understand how much focused time we achieved and where we experienced delays.

**Acceptance Criteria:**
- [ ] When the final block concludes, both users see the Session Review screen.
- [ ] Review displays:
  - Planned vs. completed blocks
  - Time spent paused / delayed
  - Total minutes of focused study achieved
