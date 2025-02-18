import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send(`hello response`);
});

test("Test ExpressJs", async () => {
  const response = await request(app).get("/");
  expect(response.text).toBe("hello response");
});
