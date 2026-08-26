# StudySync — User Stories & Acceptance Criteria

This repository contains behavior-focused user stories and acceptance criteria for StudySync product features.

---

## 📌 Standard Format

```markdown
# Feature: [Feature Name]

## User Problem
[What friction or pain point is this solving?]

## User Story
As a <user>,
I want to <action>,
so that <value>.

## Acceptance Criteria
- [ ] User can perform X
- [ ] System responds with Y
- [ ] Error state Z is handled gracefully
```

---

## 📋 MVP User Stories

### US-001: Create Study Session & Timeline
**As a** student host,  
**I want to** specify a total session time and divide it into visual study blocks and breaks on a horizontal timeline,  
**so that** my study partner and I have a clear visual schedule.

**Acceptance Criteria:**
- [ ] User can define session start and end times (or total duration).
- [ ] Timeline renders as a horizontal grid displaying time slots.
- [ ] User can add study tasks and rest break blocks to the timeline.
- [ ] User can adjust block duration by dragging or editing duration inputs.
- [ ] Total tasks + breaks duration equals or fits within total session time.

---

### US-002: Share & Join Room URL
**As a** student host,  
**I want to** copy a unique room link and send it to my study partner,  
**so that** they can join my study session instantly.

**Acceptance Criteria:**
- [ ] Clicking "Share Room" generates a unique URL (e.g. `/room/:id`).
- [ ] Copy button copies the URL to the user's clipboard.
- [ ] Recipient opening the URL joins the room and loads the shared session state.
- [ ] Participant count / presence indicator updates on both host and joiner screens.

---

### US-003: Synchronized Session Controls & Timer
**As a** room participant,  
**I want** timer actions (Start, Pause, Resume, Skip) to synchronize immediately across all connected browsers,  
**so that** everyone stays on the exact same study block and countdown clock.

**Acceptance Criteria:**
- [ ] When an authorized user clicks **Start**, countdown timer begins simultaneously on all clients.
- [ ] Active task block is highlighted on the horizontal timeline grid for all users.
- [ ] When **Pause** is clicked, timers freeze on all clients and status changes to `PAUSED`.
- [ ] When **Resume** is clicked, timers resume simultaneously.
- [ ] When active task time reaches 00:00 (or **Skip** is clicked), active state advances to the next block on the timeline.
- [ ] When session completes, all participants see the session completion summary screen.
