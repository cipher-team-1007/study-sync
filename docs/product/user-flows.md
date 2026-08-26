# StudySync — Core User Flows

## Flow 1: Room Creation & Timeline Setup (Host)

1. Host opens StudySync.
2. Host chooses "Create Study Room".
3. Host sets session parameters (e.g. Start time: 2:00 PM, End time: 4:00 PM).
4. System presents an empty 2-hour horizontal timeline grid.
5. Host adds task blocks onto the timeline:
   - Task 1: "Read Chapter 4" (45 min)
   - Break 1: "Quick Rest" (15 min)
   - Task 2: "Solve Practice Problems" (45 min)
   - Review: "Wrap-up & Notes" (15 min)
6. Host clicks "Share Room" and receives a shareable room link.

## Flow 2: Joining & Syncing (Participant)

1. Participant clicks the shared room link.
2. Participant lands in the room and sees the exact visual timeline created by the Host.
3. Participant presence indicator becomes visible to both users.
4. When Host (or authorized user) clicks **Start Session**, the synchronized timer begins counting down on both screens simultaneously.

## Flow 3: Live Session Execution & Control

1. The active task block is highlighted on the horizontal timeline.
2. If Host clicks **Pause**, both users' timers immediately pause, and status changes to `PAUSED`.
3. If Host clicks **Resume**, both timers resume in unison.
4. If a task finishes or Host clicks **Skip Task**, the active focus state automatically transitions to the next task block on the timeline.
5. When the total session duration expires, a session summary screen appears for both users.
