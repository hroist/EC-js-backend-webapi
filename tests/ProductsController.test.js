const mongoose = require("mongoose");
const request = require("supertest");
const server = require("../server");

require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach( () => {
  mongoose.connect(process.env.MONGODB_URI);
});


describe("GET /api/products", () => {
  it("should return all products", async () => {
    const res = await request(server).get("/api/products");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

/* Closing database connection after each test. */
afterEach( () => {
  mongoose.connection.close();
});


