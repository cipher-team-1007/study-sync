# StudySync — Product Decision Records (PDR)

This directory contains formal **Product Decision Records (PDR)** that document significant scope, feature, and user-experience choices.

---

## 🎯 What belongs here?

- Scope decisions (what is in MVP vs postponed)
- User experience & workflow choices
- Target audience focus adjustments
- Feature rejection rationale

> Note: **Technical architecture decisions** (databases, WebSocket protocols, server state) belong in `docs/architecture/decisions/` (ADRs), NOT here.

---

## 📑 PDR Index

| ID | Title | Status | Date |
| :--- | :--- | :--- | :--- |
| **[PDR-001](PDR-001-mvp-scope-boundary.md)** | MVP Scope Boundary & Feature Protection | **Accepted** | 2026-08-27 |

---

## 📝 How to Author a PDR

1. Duplicate `PDR-template.md` to `PDR-XXX-short-title.md`.
2. Clearly define the user problem, options considered, decision, rationale, and revisit triggers.
3. Keep technical architecture decisions in `docs/architecture/decisions/` (ADRs) instead.
