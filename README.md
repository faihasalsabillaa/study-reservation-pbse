# Study Room Reservation System (PBSE)

A contract-first study room reservation backend system built for Platform-Based Software Engineering (PBSE)

---

## 🏛️ System Overview

A student checks the availability of study rooms in the library on a given date and time. They select an available room and reserve it. An automated cleanup job periodically checks if reserved rooms have been occupied (via check-in); if a student doesn't check in within 15 minutes, the job cancels the reservation. A room display screen outside each room shows the current reservation status and allows students to check in. If a student tries to reserve a room that was just booked by someone else a second ago, the reservation fails.

### Actors
1. **Student (Human Actor):** Operates on mobile networks; requires `Idempotency-Key` on creation endpoints to guarantee retries never double-book.
2. **Room Display Screen (IoT Device):** Outside each room, syncs room schedules and handles check-ins.
3. **Automated Cleanup Job (Background Worker):** Sweeps abandoned reservations (`pending_checkin` -> `no_show`).

---

## 📁 Repository Structure

```
.
├── openapi.yaml                 # The contract (source of truth)
├── CHANGELOG.md                 # Contract revisions log
├── README.md                    # Root project documentation
├── .gitignore                   # Ignore node_modules, .env, DB files
├── docs/
│   └── decisions/
│       └── 0002-implementasi.md # Architecture decision record
├── service/                     # Backend service implementation
│   ├── package.json
│   ├── .env.example
│   ├── README.md                # Operation-status tracking table
│   ├── db/
│   │   ├── schema.sql           # Database table definitions
│   │   └── seed.sql             # Demo seed data
│   └── src/
│       ├── app.js               # Express application entrypoint
│       ├── problem.js           # RFC 9457 error builder
│       ├── routes/              # Express route handlers (rooms, reservations)
│       ├── schemas/             # Request validation logic
│       ├── store/               # SQL database access layer
│       └── representations/     # DB-to-API response mappers
├── tests/
│   ├── contract/                # Conformance tests against openapi.yaml
│   └── idempotency/             # Server-side idempotency tests
└── .github/
    └── workflows/
        └── ci.yml               # Automated CI workflow
```

---

## 👥 Team Roles & Responsibilities

| Role | Focus Area | Owned Files | Branch |
| :--- | :--- | :--- | :--- |
| **PERSON 1** | **Database + App Infrastructure** | `service/db/*`, `service/.env.example`, `service/src/app.js`, `service/README.md` | `feature/database-infra` |
| **PERSON 2** | **Study Room Resource** | `service/src/routes/rooms.js`, `service/src/schemas/rooms.js`, `service/src/store/rooms.js`, `service/src/representations/rooms.js`, `tests/contract/rooms.test.js` | `feature/rooms` |
| **PERSON 3** | **Reservation Resource** | `service/src/routes/reservations.js`, `service/src/schemas/reservations.js`, `service/src/store/reservations.js`, `service/src/representations/reservations.js`, `tests/contract/reservations.test.js` | `feature/reservations` |
| **PERSON 4** | **Errors + Idempotency + CI** | `service/src/problem.js`, `service/src/store/idempotency.js`, `tests/contract/*`, `tests/idempotency/*`, `docs/decisions/*`, `.github/*` | `feature/errors-idempotency` |

---

## 🔒 File Ownership Boundaries

**Rule:** Nobody casually edits another person's files!

- **Person 1 should NOT touch:** `src/routes/`, `src/schemas/`, `src/store/`, `src/representations/`, `src/problem.js`.
- **Person 2 and 3:** All database queries MUST live inside `store/`. Never write SQL in routes or return raw DB rows.
- **Dependency 1 (P3 ↔ P4):** Person 3 calls Person 4's idempotency store (`checkIdempotencyKey`, `saveIdempotencyResult`).
- **Dependency 2 (P1 ↔ Everyone):** Everyone depends on `schema.sql`. P1 creates the initial schema first, then freezes it. Any schema change requires team agreement before P1 modifies it.

---

## 🌳 Git Strategy

Every team member must commit using their own Git identity (required for grading):

```
main
 │
 ├── feature/database-infra    ← P1
 ├── feature/rooms             ← P2
 ├── feature/reservations      ← P3
 └── feature/errors-idempotency ← P4
```

### Checking out your branch:
- **Person 1:** `git checkout feature/database-infra`
- **Person 2:** `git checkout feature/rooms`
- **Person 3:** `git checkout feature/reservations`
- **Person 4:** `git checkout feature/errors-idempotency`

---

## 🧩 Work Order

1. **Step 1 (P1):** Create DB schema (`schema.sql`), seeds (`seed.sql`), and app skeleton (`app.js`, `.env.example`).
2. **Step 2 (P2 + P3 + P4 in parallel):**
   - **P2:** Rooms routes, schemas, store, representations, and tests.
   - **P3:** Reservations routes, schemas, store, representations, and tests.
   - **P4:** RFC 9457 `problem.js`, `store/idempotency.js`, and contract tests.
3. **Step 3 (Integration):** P1 connects routes and error handlers in `app.js`.
4. **Step 4 (Contract Testing):** P4 runs contract test suite against running service.
5. **Step 5 (Fix Failures):** Fix implementation (do not modify `openapi.yaml` to pass tests unless contract itself is deliberately revised and logged).
6. **Step 6 (Deployment):** Demonstrate read, write, and duplicate idempotency retry surviving restart.

---

## 🚀 Quick Start

1. Install dependencies:
   ```bash
   cd service
   npm install
   ```
2. Copy environment variables:
   ```bash
   cp .env.example .env
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```
4. Verify health endpoint:
   ```bash
   curl http://localhost:8080/health
   ```
