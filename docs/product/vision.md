# StudySync — Product Vision

## Definition

> **StudySync** is a collaborative real-time study room where two study partners plan a shared visual timeline and execute it together using synchronized tasks, timers, and session controls.

---

## Core Problem Statement

Studying or working together remotely often lacks structure and synchronization. Standard video calls or shared documents don't provide a shared sense of pacing, active task visibility, or synchronized focus timers. 

StudySync solves this by offering a visual, timeline-driven study room where session structure is planned upfront and executed in real-time synchronization between study partners.

---

## 🎯 The Magic Moment

The core magic of StudySync happens when:
$$\text{Create Timeline} \longrightarrow \text{Share Link} \longrightarrow \text{Partner Joins} \longrightarrow \text{Both See Same State} \longrightarrow \text{Start Session} \longrightarrow \text{Live Synchronized Execution}$$

Both peers immediately feel aligned on what is happening right now, how much time remains, and what block comes next.

---

## 🔐 Core Access & Participation Model

To protect the Magic Moment from friction:

* **Host:** Authenticated account required to create and own the study room.
* **Participant:** Guest access with display name (no account required to join or stay in sync).

---

## 🔁 The Core Product Loop

```text
  PLAN ──► SHARE ──► JOIN ──► FOCUS ──► SYNC ──► REVIEW
```

1. **PLAN:** Define session duration, create a visual horizontal timeline, divide into study blocks and breaks, and assign clear tasks.
2. **SHARE:** Generate a unique shareable room link from the Host account.
3. **JOIN:** Invite peer into the room via URL with a simple display name (zero account friction).
4. **FOCUS:** Run synchronized countdown timers for focus blocks and rest intervals.
5. **SYNC:** Broadcast timer states, active tasks, pauses, resumptions, and task progress in real time.
6. **REVIEW:** Evaluate what was planned vs. what was actually completed, identify pauses or delays, and measure total focused minutes.

---

## 🎯 Primary Product Objective

Build a rock-solid, production-quality **collaborative timeline + synchronized study session experience** for two study partners (Milestone 2: The Magic Moment) before attempting secondary or advanced feature expansions.
