import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  const type = req.get("accept"); //insensitive
  res.send(`hello ${type}`);
});

test("Test ExpressJs", async () => {
  const response = await request(app).get("/").set("Accept", "Riki");
  expect(response.text).toBe("hello Riki");
});
