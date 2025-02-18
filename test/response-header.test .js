import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.set({
    author: "Riki",
    co: "leidy",
  });
  res.send("hello world");
});

test("Test ExpressJs", async () => {
  const response = await request(app).get("/");
  expect(response.get("author")).toBe("Riki");
  expect(response.get("co")).toBe("leidy");
  expect(response.text).toBe("hello world");
});
