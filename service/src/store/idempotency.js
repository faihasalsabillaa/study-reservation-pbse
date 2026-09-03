/**
 * ============================================================================
 * IDEMPOTENCY STORE & HANDLER
 * Owned by: PERSON 4 (Cross-Cutting Errors + Idempotency + CI)
 * ============================================================================
 * Responsibilities (Pages 7-8 & 11):
 * - Must be stored in the database, NOT in memory.
 * - Expose functions for Person 3:
 *   - checkIdempotencyKey(key, body)
 *   - saveIdempotencyResult(key, bodyHash, statusCode, responseBody)
 * 
 * Exact decision order mandated by assignment:
 * Idempotency-Key
 *   ↓
 * check database
 *   ↓
 * 1. never seen:
 *    → proceed with request
 *    → save key + body hash + response
 * 2. already seen + same body:
 *    → return saved 201 response directly
 * 3. already seen + different body:
 *    → 409 Conflict (.../problems/idempotency-key-reuse)
 * ============================================================================
 */

// TODO (Person 4): Implement database-backed idempotency verification and saving
// async function checkIdempotencyKey(key, reqBody) { ... }
// async function saveIdempotencyResult(key, reqBody, statusCode, responseData) { ... }

module.exports = {
  // checkIdempotencyKey,
  // saveIdempotencyResult
};
