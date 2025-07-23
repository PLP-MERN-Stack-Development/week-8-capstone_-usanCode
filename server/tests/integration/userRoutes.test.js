

const request = require('supertest');
const express = require('express');
const userRoutes = require('../../src/routes/userRoutes');

const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);

describe("GET /api/users", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toBe(200);
  });
});
