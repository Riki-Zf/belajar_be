import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});
app.get("/riki", (req, res) => {
  res.send("<h1>hello leidy</h1>");
});

app.listen(3000, () => {
  console.info("running in port 3000");
});
