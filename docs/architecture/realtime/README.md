# StudySync — Realtime & Synchronization Architecture

This directory documents realtime protocols, event payload schemas, room channel lifecycle, presence management, and reconnection flows.

## Directory Contents

- README.md: Realtime principles & event glossary
- Event specifications & synchronization models

## Core Synchronization Rules

1. **Commands vs Events**: Clients send commands (requests); the server validates and publishes events (facts).
2. **Stateless Tick Derivation**: Never broadcast 1-second ticks over websockets. Broadcast state transitions (SESSION_STARTED, SESSION_PAUSED, SESSION_RESUMED, SESSION_SKIPPED) with authoritative timestamps.
3. **Reconnection Recovery**: Clients recovering from network drop re-fetch canonical state from the API/database and resubscribe to the room channel.
