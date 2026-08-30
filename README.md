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

## 🚀 Quickstart for Developers

### 1. Prerequisites
- **Node.js:** `v20+` (tested on Node v25)
- **npm:** `v10+`

### 2. Installation & Setup
```bash
# Clone the repository
git clone <repo-url>
cd study-sync

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Run the development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Engineering Quality Scripts
```bash
# Run TypeScript strict typecheck
npm run typecheck

# Run automated unit tests (Vitest)
npm test

# Run ESLint static analysis
npm run lint

# Build for production
npm run build
```

---

## 🧭 Multi-Agent Engineering Workflow

To maintain production-grade code quality, prevent scope creep, and maximize learning for two beginner developers, the project operates under strict mode separation coordinated by the **Orchestrator**:

| Mode | Role | Core Question | Agent Path |
| :--- | :--- | :--- | :--- |
| **Orchestrator** | Tech Lead & Coordinator | *“Which specialists are needed, in what order, and what are the approval gates?”* | [orchestrator/agent.md](file:///.agents/agents/orchestrator/agent.md) |
| **Product Mode** | Strategy, Scope & Requirements | *“What should we build, for whom, why, and in what order?”* | [product/agent.md](file:///.agents/agents/product/agent.md) |
| **Teacher Mode** | Mentorship & Technical Concepts | *“Do you understand how this works and why it is built this way?”* | [teacher/agent.md](file:///.agents/agents/teacher/agent.md) |
| **Architect Mode** | System Design, ADRs & Invariants | *“How should we design and structure this correctly?”* | [architect/agent.md](file:///.agents/agents/architect/agent.md) |
| **Engineer Mode** | Implementation & Vertical Slices | *“How do we build this approved architecture cleanly?”* | [engineer/agent.md](file:///.agents/agents/engineer/agent.md) |
| **Debugger / Tester Mode** | Verification, Root Cause & Quality | *“Does it actually work under real conditions, and what breaks?”* | [debugger-tester/agent.md](file:///.agents/agents/debugger-tester/agent.md) |
| **Reviewer Mode** | Independent Audit & Merge Readiness | *“Is it correct, secure, maintainable, and ready to merge?”* | [reviewer/agent.md](file:///.agents/agents/reviewer/agent.md) |

---

## 📚 Project Documentation

Every mode owns and maintains its dedicated documentation tree under `docs/`:

- **[Project State](file:///docs/project-state/README.md)**: Active task tracking, current phase, and blocker registry.
- **[Product Documentation](file:///docs/product/README.md)**: Product vision, problem definition, target user, user flows, feature map, roadmap, and PDRs.
- **[Teacher Knowledge Base](file:///docs/teacher/README.md)**: Sequential lessons and conceptual deep-dives for fundamental engineering mastery.
- **[Architecture Documentation](file:///docs/architecture/README.md)**: System design, ADRs, data models, realtime sync protocols, and security.
- **[Engineering Documentation](file:///docs/engineering/README.md)**: Implementation notes, testing strategies, developer handoffs, and learning log.
- **[Testing & QA Documentation](file:///docs/testing/README.md)**: Test plans, test cases, bug reports, realtime verification, and regression reports.
- **[Review Documentation](file:///docs/reviews/README.md)**: Independent code reviews, security assessments, and merge-readiness evaluations.

---

## 🏗️ Repository Structure

```text
study-sync/
├── .agents/
│   ├── agents/
│   │   ├── orchestrator/
│   │   ├── teacher/
│   │   ├── product/
│   │   ├── architect/
│   │   ├── engineer/
│   │   ├── debugger-tester/
│   │   └── reviewer/
│   ├── rules/
│   │   └── studysync-core.md
│   └── workflows/
│       ├── README.md
│       ├── feature-lifecycle.md
│       ├── teaching-flow.md
│       └── bug-triage.md
│
├── docs/
│   ├── project-state/
│   ├── product/
│   ├── teacher/
│   │   ├── concepts/
│   │   └── lessons/
│   ├── architecture/
│   │   └── decisions/
│   ├── engineering/
│   │   └── implementation-notes/
│   ├── testing/
│   │   └── session-reports/
│   └── reviews/
│       └── feature-reviews/
│
├── src/
│   ├── app/                  # Next.js 15 App Router pages & layouts
│   ├── components/           # Modular UI components
│   ├── lib/                  # Utilities, environment config & Supabase clients
│   └── types/                # Shared domain TypeScript types
│
├── supabase/
│   └── migrations/           # PostgreSQL relational schema migrations
│
├── .env.example              # Documented environment template
├── package.json
├── tsconfig.json
├── vitest.config.ts
└── README.md
```
