# StudySync — Security & Authorization Architecture

This directory defines authentication flows, user identity models, room access permissions, and Row-Level Security (RLS) policies.

## Directory Contents

- README.md: Security architecture & threat model
- Role-based permissions matrix & RLS rules

## Core Security Rules

1. **Server-Side Enforcement**: Never rely on UI button hiding for authorization.
2. **Secret Hygiene**: Zero secrets or service keys in client bundles.
3. **Room Isolation**: Participants cannot read or manipulate rooms they do not belong to.
