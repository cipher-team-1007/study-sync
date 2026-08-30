# StudySync — Supabase Database Migrations

This directory stores pure SQL migration scripts for StudySync's PostgreSQL database managed through Supabase.

---

## 🎯 Migration Philosophy

1. **Relational Integrity:** We use pure SQL migrations with explicit primary keys, foreign key constraints, check constraints, indexes, and Row-Level Security (RLS) policies.
2. **Sequential Versioning:** Migrations follow the timestamp / sequence naming format:
   `YYYYMMDDHHMMSS_description.sql` (e.g. `20260901000000_create_rooms_table.sql`).
3. **No Silent Changes:** Every schema change must correspond to an approved ADR in `docs/architecture/decisions/` and must be committed to version control.

---

## 🧭 Developer Workflow (When Table Creation Begins in Phase 2)

### Applying Migrations Locally (with Supabase CLI):
```bash
npx supabase migration new create_rooms_table
# Edit the created SQL file under supabase/migrations/
npx supabase db reset
```

### Applying Migrations to Remote Supabase Project:
```bash
npx supabase db push
```

*Note: Phase 1 establishes the client connection foundation only. Domain tables (Rooms, Tasks, Sessions) will be introduced in subsequent phases.*
