# Service Implementation — Study Room Reservation API

This directory contains the backend implementation for the Study Room Reservation System (PBSE Week 3).

## 🚀 Deployed URL
- **Production URL:** *[To be added after deployment]*
- **Health Check:** `[Deployment URL]/health`

---

## 📊 Operation Status Table

> **Requirement from Assignment (Page 2):**
> Track implementation status for all operations defined in `openapi.yaml`.
> Allowed statuses: `DONE`, `IN PROGRESS`, `MOCK`.

| Method | Path | Operation ID | Owner | Status | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `GET` | `/health` | `getHealth` | **P1** | `DONE` | Server infrastructure & health check — verified `200`, no DB dependency |
| `GET` | `/v1/rooms` | `listRooms` | **P2** | `MOCK` | Collection read, returns `200 + []` if empty |
| `GET` | `/v1/rooms/{roomId}` | `getRoom` | **P2** | `MOCK` | Single entity read; malformed ID -> 400 |
| `GET` | `/v1/reservations` | `listReservations` | **P3** | `MOCK` | Collection read with status filter & pagination |
| `POST` | `/v1/reservations` | `createReservation` | **P3** | `MOCK` | Unsafe POST; requires `Idempotency-Key` |
| `GET` | `/v1/reservations/{reservationId}` | `getReservation` | **P3** | `MOCK` | Single entity lookup; malformed ID -> 400 |
| `POST` | `/v1/reservations/{reservationId}/cancellation` | `cancelReservation` | **P3** | `MOCK` | Sub-resource state transition |

---

## 🛠️ How to Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

3. **Initialize database (Person 1):**
   ```bash
   npm run db:init # or run schema.sql and seed.sql
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The service will be listening on `http://localhost:8080`.

5. **Run contract tests (Person 4):**
   ```bash
   npm run test:contract
   ```
