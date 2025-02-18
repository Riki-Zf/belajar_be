import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  if (req.query.name) {
    res.status(200);
    res.send(`hello ${req.query.name}`);
  } else {
    res.status(400);
    res.end();
  }
});

test("Test ExpressJs", async () => {
  let response = await request(app).get("/").query({ name: "Riki" });
  expect(response.status).toBe(200);
  expect(response.text).toBe("hello Riki");

  response = await request(app).get("/");
  expect(response.status).toBe(400);
});
