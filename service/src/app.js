/**
 * ============================================================================
 * APPLICATION ENTRYPOINT — Express App & Infrastructure
 * Owned by: PERSON 1 (Database + App Infrastructure)
 * ============================================================================
 * Responsibilities (Page 1):
 * - Express/app setup
 * - Load environment variables
 * - Configuration checks
 * - Register routes (rooms, reservations)
 * - Global error handler hookup (integrating Person 4's problem.js)
 * - /health endpoint
 * - Server startup
 * 
 * Note: Person 1 connects routes and error handlers (Step 3: Integration).
 * ============================================================================
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Configuration checks
const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();

// Standard middleware
app.use(cors());
app.use(express.json());

// ----------------------------------------------------------------------------
// Health Check Endpoint (Owned by Person 1)
// ----------------------------------------------------------------------------
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'pass',
    description: 'Study Room Reservation API service is healthy',
    version: '0.1.0',
    timestamp: new Date().toISOString()
  });
});

// ----------------------------------------------------------------------------
// Route Registrations (Assembly point - Person 1 connects these)
// ----------------------------------------------------------------------------
// const roomsRouter = require('./routes/rooms');
// const reservationsRouter = require('./routes/reservations');

// app.use('/v1/rooms', roomsRouter);
// app.use('/v1/reservations', reservationsRouter);

// Fallback for unhandled routes
app.use((req, res) => {
  res.status(404).json({
    type: 'https://api.library.example/problems/not-found',
    title: 'Resource Not Found',
    status: 404,
    detail: `Route ${req.method} ${req.path} does not exist.`,
    instance: req.path
  });
});

// ----------------------------------------------------------------------------
// Global Error Handler Hookup (Assembly point - connects Person 4's problem handler)
// ----------------------------------------------------------------------------
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  const status = err.status || 500;
  res.status(status).json({
    type: 'https://api.library.example/problems/internal-server-error',
    title: 'Internal Server Error',
    status,
    detail: NODE_ENV === 'production' ? 'An unexpected error occurred.' : err.message,
    instance: req.path
  });
});

// ----------------------------------------------------------------------------
// Server Startup
// ----------------------------------------------------------------------------
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`[service] Study Reservation API running on http://localhost:${PORT}`);
    console.log(`[service] Health endpoint: http://localhost:${PORT}/health`);
  });
}

module.exports = app;
