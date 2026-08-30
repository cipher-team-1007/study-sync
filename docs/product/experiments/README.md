# StudySync — Product Experiments & Validation Log

When uncertainty around user behavior or feature value is high, we run lightweight product experiments to test our hypotheses before writing complex code.

This directory tracks lightweight product experiments designed to validate product hypotheses and reduce uncertainty cheaply before building complex infrastructure.

---

## 🧪 Experiment Structure

```markdown
# EXP-00X: [Experiment Title]

## Question
What specific user behavior or preference are we unsure about?

## Hypothesis
What do we believe users will do?

## Smallest Test / Prototype
What is the simplest, lowest-effort way to test this?

## Signal / Observation
What observable behavior, metric, or outcome actually occurred during usage?

## Conclusion & Action
What did we learn? Accept / Modify / Reject hypothesis, and what should we build (or not build)?
```

---

## 📋 Active & Planned Experiments

| ID | Title | Hypothesis | Status | Result |
| :--- | :--- | :--- | :--- | :--- |
| **EXP-001** | Session Control Preferences | Will study partners prefer an owner-controlled session, or do they want shared control? | Planned | Testing default Owner-controlled model against shared control with peer pairs |
| **EXP-002** | Horizontal Timeline Layout | A horizontal drag/resize grid is more intuitive for study pacing than a standard vertical list. | Planned | Pending UI user testing |
