/**
 * ============================================================================
 * CONTRACT TESTS — Study Room Resource
 * Owned by: PERSON 2 / PERSON 4
 * ============================================================================
 * Tests to implement:
 * 1. GET /v1/rooms - returns 200 with list of rooms
 * 2. GET /v1/rooms - returns 200 with empty array [] when no rooms exist
 * 3. GET /v1/rooms/{id} - returns 200 with room representation
 * 4. GET /v1/rooms/{id} - returns 400 for malformed ID format
 * 5. GET /v1/rooms/{id} - returns 404 for non-existent room ID
 * ============================================================================
 */

describe('Rooms Contract Tests', () => {
  it.todo('GET /v1/rooms returns 200 and a list of rooms conforming to openapi.yaml');
  it.todo('GET /v1/rooms returns 200 and [] when no rooms match');
  it.todo('GET /v1/rooms/:id returns 200 with single room representation');
  it.todo('GET /v1/rooms/:id returns 400 for malformed ID');
  it.todo('GET /v1/rooms/:id returns 404 for missing room');
});
