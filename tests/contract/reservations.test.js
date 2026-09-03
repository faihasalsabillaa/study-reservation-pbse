/**
 * ============================================================================
 * CONTRACT TESTS — Reservation Resource
 * Owned by: PERSON 3 / PERSON 4
 * ============================================================================
 * Tests to implement:
 * 1. POST /v1/reservations (Success 201 with Location header and schema)
 * 2. POST /v1/reservations (Missing Idempotency-Key -> 400)
 * 3. POST /v1/reservations (Malformed body -> 400)
 * 4. POST /v1/reservations (Invalid logic / endTime <= startTime -> 422)
 * 5. POST /v1/reservations (Conflict with existing booking -> 409)
 * 6. GET /v1/reservations (List reservations with status filter)
 * 7. GET /v1/reservations/{id} (Fetch single reservation)
 * 8. GET /v1/reservations/{id} (Malformed ID -> 400)
 * 9. GET /v1/reservations/{id} (Not found -> 404)
 * ============================================================================
 */

describe('Reservations Contract Tests', () => {
  it.todo('POST /v1/reservations creates reservation and returns 201 with Location header');
  it.todo('POST /v1/reservations returns 400 when Idempotency-Key header is absent');
  it.todo('POST /v1/reservations returns 422 when time range is invalid (validation-failed)');
  it.todo('POST /v1/reservations returns 409 when room is already booked (room-unavailable)');
  it.todo('GET /v1/reservations returns 200 with list conforming to openapi.yaml');
  it.todo('GET /v1/reservations/:id returns 200 with single reservation');
  it.todo('GET /v1/reservations/:id returns 400 for malformed ID');
  it.todo('GET /v1/reservations/:id returns 404 for non-existent ID');
});
