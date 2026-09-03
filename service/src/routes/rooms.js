/**
 * ============================================================================
 * STUDY ROOM ROUTES
 * Owned by: PERSON 2 (Study Room Resource)
 * ============================================================================
 * Responsibilities (Pages 2-4):
 * - GET /v1/rooms
 * - GET /v1/rooms/{id}
 * 
 * Rules:
 * - Connect endpoints to handlers.
 * - Call validation in schemas/rooms.js.
 * - Malformed ID -> 400, not 404.
 * - Call store/rooms.js for database access.
 * - Return representations via representations/rooms.js (never raw DB rows).
 * - Empty collection: 200 + [], not 404.
 * ============================================================================
 */

const express = require('express');
const router = express.Router();

// TODO (Person 2): Wire up route handlers
// router.get('/', async (req, res, next) => { ... });
// router.get('/:roomId', async (req, res, next) => { ... });

module.exports = router;
