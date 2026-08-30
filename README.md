# StudySync

> **StudySync** is a collaborative real-time study room where people plan a shared timeline and execute it together using synchronized tasks, timers, and session controls.

---

## 🎯 The Core Product Loop

```text
  PLAN ──► SHARE ──► JOIN ──► FOCUS ──► SYNC ──► REVIEW
```

1. **PLAN:** Visually construct a horizontal timeline with focus blocks and breaks.
2. **SHARE:** Generate and share a frictionless room link.
3. **JOIN:** Peers enter the room via URL with zero friction.
4. **FOCUS:** Work in structured focus intervals with visual progress indication.
5. **SYNC:** Stay aligned in real time with synchronized timers, active tasks, and session status.
6. **REVIEW:** Inspect completed blocks and celebrate collective focus.

---

## 🧭 Multi-Mode Engineering Workflow

To maintain production-grade code quality, prevent scope creep, and maximize learning for two beginner developers, the project operates under strict mode separation:

| Mode | Role | Core Question | Agent Path |
| :--- | :--- | :--- | :--- |
| **Product Mode** | Strategy, Scope & Requirements | *“What should we build, for whom, why, and in what order?”* | [product/agent.md](file:///.agents/agents/product/agent.md) |
| **Teacher Mode** | Mentorship & Technical Concepts | *“Do you understand how this works and why it is built this way?”* | [teacher/agent.md](file:///.agents/agents/teacher/agent.md) |
| **Architect Mode** | System Design, ADRs & Invariants | *“How should we design and structure this correctly?”* | [architect/agent.md](file:///.agents/agents/architect/agent.md) |
| **Engineer Mode** | Implementation & Vertical Slices | *“How do we build this approved architecture cleanly?”* | [engineer/agent.md](file:///.agents/agents/engineer/agent.md) |
| **Debugger / Tester Mode** | Verification, Root Cause & Quality | *“Does it actually work under real conditions, and what breaks?”* | [debugger-tester/agent.md](file:///.agents/agents/debugger-tester/agent.md) |
| **Reviewer Mode** | Independent Audit & Merge Readiness | *“Is it correct, secure, maintainable, and ready to merge?”* | [reviewer/agent.md](file:///.agents/agents/reviewer/agent.md) |

---

## 📚 Project Documentation

Every mode owns and maintains its dedicated documentation tree under `docs/`:

- **[Product Documentation](file:///docs/product/README.md)**: Product vision, problem definition, target user, user flows, feature map, roadmap, and PDRs.
- **[Teacher Mode Knowledge Base](file:///docs/teacher/README.md)**: Sequential lessons and conceptual deep-dives for fundamental engineering mastery.
- **[Architecture Documentation](file:///docs/architecture/README.md)**: System design, ADRs, data models, realtime sync protocols, and security.
- **[Engineering Documentation](file:///docs/engineering/README.md)**: Implementation notes, testing strategies, developer handoffs, and learning log.
- **[Testing & QA Documentation](file:///docs/testing/README.md)**: Test plans, test cases, bug reports, realtime verification, and regression reports.
- **[Review Documentation](file:///docs/reviews/README.md)**: Independent code reviews, security assessments, and merge-readiness evaluations.

---

## 🏗️ Repository Structure

```text
study-sync/
│
├── .agents/
│   ├── agents/
│   │   ├── teacher/
│   │   │   └── agent.md
│   │   ├── product/
│   │   │   └── agent.md
│   │   ├── architect/
│   │   │   └── agent.md
│   │   ├── engineer/
│   │   │   └── agent.md
│   │   ├── debugger-tester/
│   │   │   └── agent.md
│   │   └── reviewer/
│   │       └── agent.md
│   │
│   ├── rules/
│   │   └── studysync-core.md
│   │
│   └── workflows/
│       ├── README.md
│       ├── feature-lifecycle.md
│       ├── teaching-flow.md
│       └── bug-triage.md
│
├── docs/
│   ├── product/
│   ├── teacher/
│   │   ├── concepts/
│   │   └── lessons/
│   ├── architecture/
│   ├── engineering/
│   ├── testing/
│   └── reviews/
│
└── README.md
```
