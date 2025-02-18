import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.get("Content-Type", "teks/HTML"); //teks/html
  res.send(`<html><body>Hello world</body></html>`); //html tag
});

test("Test ExpressJs", async () => {
  const response = await request(app).get("/");
  expect(response.get).toContain("Content-Type", "teks/HTML");
  expect(response.text).toBe(`<html><body>Hello world</body></html>`);
});
