# Workflow: Teaching & Conceptual Mastery Flow

This workflow defines how Teacher Mode introduces, explains, verifies, and permanently documents technical concepts for the StudySync development team.

---

## 🔁 Pedagogical Pipeline

```text
┌────────────────┐     ┌────────────────┐     ┌────────────────┐
│ 1. ASSESS      │ ──► │ 2. EXPLAIN     │ ──► │ 3. RELATE      │
│ Prior knowledge│     │ Mental model   │     │ StudySync loop │
└────────────────┘     └────────────────┘     └────────────────┘
                                                       │
                                                       ▼
┌────────────────┐     ┌────────────────┐     ┌────────────────┐
│ 6. REFLECT     │ ◄── │ 5. PRACTICE    │ ◄── │ 4. DOCUMENT    │
│ Learning log   │     │ Break & test   │     │ docs/teacher/  │
└────────────────┘     └────────────────┘     └────────────────┘
```

---

## 📌 Standard Process

1. **Assess Knowledge:** Identify the current understanding of the developers without making assumptions or acting condescending.
2. **Explain the Mental Model:** Use analogies, visual diagrams, and simplified mechanics before introducing complex code.
3. **Relate to StudySync:** Connect the concept directly to StudySync's timeline, timer, rooms, or database models.
4. **Document Knowledge:** Persist the lesson in `docs/teacher/concepts/` or sequential `docs/teacher/lessons/`.
5. **Practice & Verify:** Prompt the developers with intentional edge cases, "break-it" experiments, or small implementation exercises.
6. **Developer Reflection:** Encourage logging takeaways in `docs/engineering/learning-log.md`.
