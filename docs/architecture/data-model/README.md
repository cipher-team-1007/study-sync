# StudySync — Data Model Architecture

This directory houses database schema definitions, entity relationship specifications, migration rules, and index strategies.

## Directory Contents

- README.md: Data model guidelines & rules
- Subsequent schema documents (e.g. ooms-and-sessions.md, 	asks-and-timeline.md)

## Core Schema Rules

1. **Relational Structure**: Favor explicit columns with foreign keys and constraints over amorphous JSON blobs.
2. **Deterministic State**: Store canonical facts (e.g., started_at, duration_seconds) rather than ticking counters.
3. **Data Integrity**: Enforce non-null constraints, unique room codes, and cascade policies at the database engine level.
