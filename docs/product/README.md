# StudySync — Product Documentation

Welcome to the product specification and roadmap repository for **StudySync**. This space is owned and maintained by **Product Mode** and serves as the product source of truth.

---

## 🎯 Product Mission & Core Question

> **“What should we build, for whom, why, and in what order?”**

Product Mode protects the product from feature creep and keeps development focused on building something that two beginner developers can build well and that users will actually love using.

---

## 🔄 The Core Product Loop

```text
  PLAN ──► SHARE ──► JOIN ──► FOCUS ──► SYNC ──► REVIEW
```

1. **PLAN:** Visually construct a horizontal timeline with focus blocks and breaks.
2. **SHARE:** Generate and copy a frictionless shareable room link.
3. **JOIN:** Peers enter the room via URL with zero friction.
4. **FOCUS:** Work in structured focus intervals with clear visual progress indication.
5. **SYNC:** Stay aligned in real time with synchronized timers, active tasks, and session status.
6. **REVIEW:** Review completed blocks and celebrate collective focus.

---

## 📂 Product Documentation Structure

```text
docs/product/
├── README.md              # Product overview, core loop, and directory navigation
├── vision.md              # Product vision, core value proposition, and experience principles
├── problem.md             # Primary product problem and working hypotheses
├── target-user.md         # Target audience definition, anti-personas, and user profiles
├── non-goals.md           # Explicit product non-goals (what we deliberately choose not to build)
├── success-criteria.md    # MVP success benchmarks, evaluation criteria, and qualitative signals
├── user-flows.md          # End-to-end user flows and friction analysis
├── feature-map.md         # Feature categorization (CORE, IMPORTANT, LATER, REJECT)
├── roadmap.md             # Phased roadmap (Now, Next, Later)
├── decisions/             # Product Decision Records (PDRs)
├── user-stories/          # Behavior-focused user stories with acceptance criteria
└── experiments/           # Lightweight product validation experiments
```

| Document | Purpose |
| :--- | :--- |
| **[vision.md](vision.md)** | Product vision, core loop, and primary product definition. |
| **[problem.md](problem.md)** | Working problem hypothesis and validation criteria. |
| **[target-user.md](target-user.md)** | Primary (2 study partners) & secondary audiences, persona, and anti-audiences. |
| **[non-goals.md](non-goals.md)** | Explicit product non-goals (what we deliberately choose not to build). |
| **[success-criteria.md](success-criteria.md)** | MVP success benchmarks, evaluation criteria, and qualitative signals. |
| **[user-flows.md](user-flows.md)** | End-to-end user journeys (Host setup, frictionless guest join, live sync, review). |
| **[feature-map.md](feature-map.md)** | Feature categorization, session ownership model, and presence hierarchy. |
| **[roadmap.md](roadmap.md)** | Product Milestones (M0–M5) mapped to Engineering Learning Phases. |
| **[user-stories/](user-stories/README.md)** | User story repository with acceptance criteria. |
| **[experiments/](experiments/README.md)** | Lightweight product hypothesis validation experiments. |
| **[decisions/](decisions/README.md)** | Product Decision Records (PDRs) for major scope & strategy choices. |

---

## ⚖️ Product Decision Standard

Every major product decision must answer:
- **WHO** is this for?
- **WHAT** problem are we solving?
- **WHY** does this matter?
- **WHAT** behavior should happen?
- **WHY** now?
- **WHAT** are we intentionally not building?
- **HOW** will we know it is useful?

---

## 🛡️ Scope Protection Rules

1. **Protect the Magic Moment**: Fast, frictionless creation of a shared horizontal timeline + synchronized execution.
2. **Feature Prioritization Framework**: Classify every proposal into `CORE / MVP`, `IMPORTANT`, `LATER`, or `REJECT / NOT NOW`.
3. **No Unnecessary Complexity**: Say "Not yet" to complex AI features, social feeds, leaderboards, multi-tenant enterprise features, or mobile native apps until the core loop is exceptional.
