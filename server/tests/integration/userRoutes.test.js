

// server/tests/integration/userRoutes.test.js

const request = require('supertest');
const express = require('express');
const userRoutes = require('../../src/routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes); // make sure this matches your real route

describe('User Routes Integration Test', () => {
  it('GET /api/users - should return "Users route working"', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Users route working');
  });
});

