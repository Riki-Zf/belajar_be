import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send(`hello ${req.query.firstName} ${req.query.lastName}`);
});

test("Test Query parameter", async () => {
  const response = await request(app).get("/").query({ firstName: "Rizky", lastName: "Fahrezi" });
  expect(response.text).toBe("hello Rizky Fahrezi");
});
