# Lesson 001: Web Architecture Foundations for StudySync

## Context

Before writing any code or picking frameworks (React, Node, PostgreSQL, WebSockets), we must understand how a real-time web application functions across browsers, servers, and databases. 

Why now? Because if we don't understand where data lives and how it moves, we won't be able to make smart design choices for StudySync's collaborative timeline and synchronized timers.

---

## Concept: Client-Server Architecture

In plain language:
Imagine a customer in a restaurant (the **Client**) ordering food from a kitchen (the **Server**). The customer doesn't cook the food or store the secret recipes; they request what they need, and the kitchen processes and returns it.

In technical terms:
- **Client (Browser):** The user interface (UI) running HTML, CSS, and JavaScript. It renders pixels, listens for user input (clicks, keypresses), and displays state.
- **Server:** A centralized computer (or process) that runs business logic, validates input, manages permissions, and communicates with storage.
- **Database:** The persistent memory storage (e.g., PostgreSQL) that saves data permanently so it isn't lost when browsers or servers restart.

---

## StudySync Example & Event Flow

Let's see what happens when **User A** creates a study session room:

```text
User A Browser (Client)          StudySync Backend (Server)          Database (PostgreSQL)
        │                                    │                                 │
        ├─── 1. POST /api/rooms ────────────►│                                 │
        │    (Name: "Math Focus 2-4PM")      ├─── 2. Save new room record ────►│
        │                                    │    (id: "room-123")             │
        │                                    │◄── 3. Confirmed saved ──────────┤
        │◄── 4. Return { roomId: "room-123" }┤                                 │
        │                                    │                                 │
```

1. **Client Action:** User A enters "Math Focus 2-4PM" and clicks *Create Room*.
2. **HTTP Request:** The browser sends an HTTP `POST` request with the session payload to the backend server.
3. **Server Logic & Persistence:** The server verifies the input, writes a new record into the `rooms` table in PostgreSQL, and gets back a unique room ID (`room-123`).
4. **HTTP Response:** The server responds to the browser with the newly created room ID.
5. **Client Rendering:** User A's browser updates the URL to `/room/room-123` and displays the timeline grid.

---

## The Realtime Challenge: How does User B see the room?

Standard HTTP requests follow a **Request-Response** pattern (the browser must ask first before receiving an answer). But what happens when **User B** joins `/room/room-123` and **User A** presses **Pause** on the study timer?

- **Standard HTTP (Polling):** User B's browser would have to ask the server every 1 second: *"Did User A pause yet?"* — This is inefficient and wastes bandwidth.
- **WebSockets (Persistent Connection):** Both User A and User B open an open two-way pipe to the server. When User A presses **Pause**, User A's browser sends a `PAUSE` signal to the server over the pipe, and the server immediately **broadcasts** `PAUSE` down to User B's browser without User B needing to ask!

---

## Tradeoffs: Where Should State Live?

In web engineering, **State** is any data that changes over time (e.g., current elapsed timer seconds, list of tasks, current room status).

| Location | Pros | Cons | StudySync Use Case |
| :--- | :--- | :--- | :--- |
| **Client-Only State** | Fast, no network delay | Not shared with others, lost on refresh | Hover states, active text input cursor position |
| **Server-Authoritative State** | Single source of truth, secure, synced across users | Requires network roundtrip | Room timeline, active timer state, user list |

---

## Common Mistakes Beginners Make

1. **Believing the browser clock is enough:** Relying on `setInterval` in User A's browser to count down seconds locally without server coordination leads to clock drift (User A's timer will read `14:32` while User B's reads `14:28`).
2. **Storing shared data only in local browser state:** If User B joins late, they won't receive past events unless the server keeps the authoritative state in a database.

---

## What We Should Remember

1. **Clients render UI; Servers enforce rules; Databases remember data.**
2. **HTTP is for ask-and-receive operations (creating rooms, fetching initial data).**
3. **WebSockets are for instant, two-way push notifications (timer pause/play, live cursor/task drag).**
4. **Shared state must be Server-Authoritative.**

---

## Thought Exercise for Developers

> **Scenario:** 
> User A and User B are in the same StudySync room. User A resizes a task block from 30 minutes to 45 minutes on the visual timeline.
>
> **Questions to reason through together:**
> 1. Which browser initiates the change?
> 2. Should the task resize instantly on User A's screen before the server responds (Optimistic Update), or should User A wait for the server to confirm? What happens if the server rejects the edit?
> 3. How does User B's browser find out that the task was resized?
