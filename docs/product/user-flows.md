# StudySync — Core User Flows

## 🔐 Room Access & Identity Model

* **Host:** Authenticated
* **Participant:** Guest access with display name (no account required)

---

## Flow 1: Room Creation & Timeline Setup (Host)

1. **Access**: Host logs into their StudySync account.
2. **Setup**: Host selects "Create Study Room" and sets session duration (e.g. 2:00 PM to 4:00 PM, total 2 hours).
3. **Timeline Planning**: System presents a horizontal timeline grid where Host places blocks:
   - Task 1: "Read Chapter 4" (45 min)
   - Break 1: "Quick Rest" (15 min)
   - Task 2: "Solve Practice Problems" (45 min)
   - Review: "Wrap-up & Notes" (15 min)
4. **Share**: Host clicks "Share Room" to copy the unique room link.

---

## Flow 2: Frictionless Joining & Presence (Participant)

1. **Direct Link**: Participant opens the shared room link in their browser.
2. **Name Entry**: Participant enters their display name (e.g., *"Maya"*) — **no mandatory account creation or email verification**.
3. **Immediate Entry**: Participant instantly enters the room and sees the identical horizontal visual timeline.
4. **Presence Connection**: Both Host and Participant see each other's status switch to **Online**.

---

## Flow 3: Live Synchronized Execution (Session Ownership)

1. **Start**: Host clicks **Start Session**. The countdown timer begins simultaneously on both screens.
2. **Active Block Highlight**: The active task block is highlighted on the shared horizontal timeline for both users.
3. **Pausing / Resuming**:
   - When Host clicks **Pause**, timers freeze on both screens with status `PAUSED`.
   - When Host clicks **Resume**, timers restart in unison.
4. **Task Completion / Skip**:
   - When the active block countdown reaches 00:00 (or Host clicks **Skip Task**), focus automatically shifts to the next scheduled block (e.g., transition from Study to Break).
   - Participant's screen transitions seamlessly with zero manual refresh.

---

## Flow 4: Structured Session Review

When the final session block completes (or Host finishes the session), both users transition to the **Session Review** summary:

1. **Planned vs. Actual**: Visual comparison of scheduled blocks vs. completed blocks.
2. **Pacing & Delays**: Visibility into paused intervals or tasks where the pair ran over time.
3. **Total Focused Time**: Aggregate focused study minutes achieved during the session.
4. **Wrap-up Notes**: Quick review reflection before closing the room.
