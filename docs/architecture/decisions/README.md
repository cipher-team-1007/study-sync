# Architecture Decision Records (ADRs)

Architecture Decision Records (ADRs) capture important technical decisions, their context, options evaluated, tradeoffs accepted, and future reconsideration triggers.

## Why We Use ADRs

When building software (especially as two developers learning engineering), it is easy to forget *why* a certain library, database structure, or synchronization pattern was selected. ADRs preserve institutional memory and prevent endless relitigation of past decisions.

## Index of Decisions

| ADR | Title | Status | Date |
| :--- | :--- | :--- | :--- |
| [ADR-000](file:///c:/Users/kunal/Desktop/study-sync/docs/architecture/decisions/ADR-template.md) | ADR Template & Process Definition | Accepted | 2026-08-27 |
| [ADR-001](file:///c:/Users/kunal/Desktop/study-sync/docs/architecture/decisions/ADR-001-phase1-tech-stack.md) | Selection of Phase 1 Core Technical Stack | Accepted | 2026-08-29 |
| [ADR-002](file:///c:/Users/kunal/Desktop/study-sync/docs/architecture/decisions/ADR-002-timer-state-model.md) | Timestamp-Driven Authoritative Timer State Model | Proposed | 2026-08-30 |
| [ADR-003](file:///c:/Users/kunal/Desktop/study-sync/docs/architecture/decisions/ADR-003-environment-and-supabase-architecture.md) | Environment Configuration and Supabase Client Architecture | Accepted | 2026-08-31 |

---

## When to Write an ADR

Write an ADR whenever making a decision that:
- Selects or changes a core technology (framework, database, realtime engine, auth provider)
- Defines a shared state management or synchronization strategy
- Establishes a database schema philosophy (e.g. relational tables vs JSON documents)
- Changes security or authorization boundaries
- Introduces or rejects architectural patterns (e.g. Event Sourcing, CRDTs, Microservices)
