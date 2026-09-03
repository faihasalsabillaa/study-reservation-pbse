/**
 * ============================================================================
 * RFC 9457 PROBLEM DETAILS HELPER
 * Owned by: PERSON 4 (Cross-Cutting Errors + Idempotency + CI)
 * ============================================================================
 * Responsibilities (Pages 6-7):
 * - Create one standardized error helper function.
 * - Produces responses with Content-Type: application/problem+json.
 * - Standard RFC 9457 fields:
 *   - status: HTTP status code integer
 *   - type: Stable URI identifying the error kind (never changes)
 *   - title: Fixed human-readable summary for developers
 *   - detail: Explanation specific to this occurrence
 *   - instance: Request path / URI of this occurrence
 * - Allows extension members (e.g., conflictingReservationId, errors[], etc.)
 * ============================================================================
 */

// TODO (Person 4): Implement standardized problem response builder/helper
// function problem(res, { status, type, title, detail, instance, ...extensions }) { ... }

module.exports = {
  // export problem function
};
