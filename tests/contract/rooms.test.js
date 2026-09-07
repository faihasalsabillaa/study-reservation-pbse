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

const path = require('path');

require('../../service/node_modules/dotenv').config({
  path: path.resolve(__dirname, '../../service/.env')
});

const express = require('../../service/node_modules/express');
const request = require('../../service/node_modules/supertest');

const roomsRouter = require('../../service/src/routes/rooms');

function createApp() {
  const app = express();

  app.use(express.json());
  app.use('/v1/rooms', roomsRouter);

  app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message
    });
  });

  return app;
}

describe('Rooms Contract Tests', () => {
  const app = createApp();

  it('GET /v1/rooms returns 200 and a list of rooms conforming to openapi.yaml', async () => {
    const response = await request(app)
      .get('/v1/rooms');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);

    response.body.forEach((room) => {
      expect(room).toEqual(
        expect.objectContaining({
          id: expect.any(String),
          name: expect.any(String),
          capacity: expect.any(Number),
          location: expect.any(String),
          createdAt: expect.any(String)
        })
      );
    });
  });

  it('GET /v1/rooms returns 200 and [] when no rooms exist', async () => {
    const response = await request(app)
      .get('/v1/rooms');

    expect(response.statusCode).toBe(200);

    // Collection response must always be an array.
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('GET /v1/rooms/:id returns 200 with single room representation', async () => {
    const response = await request(app)
      .get('/v1/rooms/rm_1a2B3cD');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(
      expect.objectContaining({
        id: 'rm_1a2B3cD',
        name: 'Study Room A',
        capacity: 4,
        location: 'Library Floor 1 - Wing A',
        createdAt: expect.any(String)
      })
    );
  });

  it('GET /v1/rooms/:id returns 400 for malformed ID', async () => {
    const response = await request(app)
      .get('/v1/rooms/abc');

    expect(response.statusCode).toBe(400);
  });

  it('GET /v1/rooms/:id returns 404 for missing room', async () => {
    const response = await request(app)
      .get('/v1/rooms/rm_999999');

    expect(response.statusCode).toBe(404);
  });
});
