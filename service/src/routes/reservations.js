/**
 * ============================================================================
 * RESERVATION ROUTES
 * Owned by: PERSON 3 (Reservation Resource)
 * ============================================================================
 * Responsibilities (Pages 4-6):
 * - GET /v1/reservations (collection read with status filter)
 * - GET /v1/reservations/:reservationId (single entity read)
 * - POST /v1/reservations (unsafe write operation with Idempotency-Key)
 * - POST /v1/reservations/:reservationId/cancellation (state transition)
 * 
 * Rules:
 * - Request validation (schemas/reservations.js)
 * - Idempotency integration (Dependency 1: calls Person 4's store/idempotency.js)
 * - Status code precision:
 *   - 400: Malformed request
 *   - 422: Valid structure but semantically unusable (e.g. end <= start)
 *   - 409: Domain conflict (room already booked) or idempotency mismatch
 *   - 201: Created, includes Location header
 * - Never return raw DB rows; map through representations/reservations.js
 * ============================================================================
 */

const express = require('express');
const router = express.Router();

// Dependency 1 — Call Person 4's idempotency store
// const { checkIdempotencyKey, saveIdempotencyResult } = require('../store/idempotency');

// TODO (Person 3): Implement reservation routes
// router.get('/', async (req, res, next) => { ... });
// router.get('/:reservationId', async (req, res, next) => { ... });
// router.post('/', async (req, res, next) => { ... });
// router.post('/:reservationId/cancellation', async (req, res, next) => { ... });

module.exports = router;
