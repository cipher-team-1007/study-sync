# StudySync — Product Success Criteria (MVP)

This document defines how we evaluate whether the initial version of StudySync successfully achieves its core product promise.

---

## 🎯 The Core Success Definition

The MVP is successful if:

> **A new user can create a session, build a simple horizontal timeline, share the link, have a study partner join with zero account friction, press Start, and experience a synchronized live study session without needing any explanation or guidance from the developers.**

---

## 📊 Key Product Signals (Without Premature Analytics)

We define clear evaluation criteria up-front before building any complex analytics infrastructure:

| Signal | Target Benchmark | Why It Matters |
| :--- | :--- | :--- |
| **Time to Create Session** | `< 2 minutes` | Validates that timeline setup is intuitive and lightweight. |
| **Time for Peer to Join** | `< 15 seconds` (from link click to viewing live timeline) | Validates that joining is frictionless (no mandatory account creation). |
| **Session Start Rate** | `> 80%` of created rooms reach `Start` | Confirms users don't abandon before the collaborative session begins. |
| **Session Completion Rate** | `> 70%` of started sessions complete all or most blocks | Confirms the timer and sync experience is stable, reliable, and not disruptive. |
| **Repeat Usage** | Study pairs return to run another session within 7 days | Demonstrates genuine utility and value over standard manual coordination. |

---

## 🧪 Qualitative Success Indicators

Beyond numbers, qualitative testing with real study pairs must confirm:

1. **No Confusion Over State**: Both participants always know what task is active, whether the timer is running or paused, and when the next break occurs.
2. **Zero Split-Brain**: Timers never drift apart between participants, and actions (Pause/Resume/Skip) reflect immediately on both screens.
3. **Natural Communication Fit**: The tool runs smoothly alongside existing voice calls (Discord, Zoom) or in-person library sessions without competing for audio/video attention.
