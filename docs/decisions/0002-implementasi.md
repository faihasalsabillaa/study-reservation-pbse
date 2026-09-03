# 2. Service Implementation & Architecture Decisions

- **Status:** Proposed
- **Date:** 2026-09-03
- **Author:** PERSON 4 (Cross-Cutting Errors + Idempotency + CI)

## Context
The Study Room Reservation API requires a production-ready backend service conforming strictly to the `openapi.yaml` specification. The service must persist data across restarts, handle idempotency correctly (preventing duplicate bookings), and provide RFC 9457 Problem Details for all errors.

## Decision

### 1. Hosting Provider
- **Decision:** *[TODO: e.g., Render, Railway, Fly.io, or VPS]*
- **Rationale:** *[TODO: e.g., zero-cost tier, persistent disk support, Node.js runtime]*

### 2. Idempotency Storage
- **Decision:** *[TODO: e.g., Dedicated SQLite / PostgreSQL table `idempotency_keys` storing key, body hash (SHA-256), HTTP status code, response body, and expiry timestamp]*
- **Rationale:** The assignment explicitly forbids in-memory storage. Storing idempotency records in the database guarantees survival across service restarts.

### 3. Structural Deviations (if any)
- **Decision:** *[TODO: Note any deviations from standard course conventions, or confirm 100% adherence]*

## Alternatives Considered
- In-memory idempotency cache (Rejected: Fails the requirement that idempotency survives server restart).
- External Redis cache (Considered: viable, but adds unnecessary deployment complexity compared to unified DB table).

## Consequences
- Single source of truth in database.
- Idempotency lookups are durable.
- Team members can develop independently against store contracts.
