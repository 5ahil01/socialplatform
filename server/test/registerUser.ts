import { describe, it, expect } from "@jest/globals";
import request from "supertest";
import { app } from "../src/app";

describe("register user", () => {
  it("should register a new user", async () => {
    const uniqueEmail = `testuser_${Date.now()}@example.com`;
    const response = await request(app).post("/user/register").send({
      username: "testuser",
      email: uniqueEmail,
      password: "password123",
    });

    // The controller returns 200 on success implicitly via res.json()
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("user");
    expect(response.body.user).toHaveProperty("email", uniqueEmail);
  });
});
