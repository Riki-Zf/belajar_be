import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});
app.get("/riki", (req, res) => {
  res.send("<h1>hello leidy</h1>");
});

app.get("/hello/world", (req, res) => {
  res.json({
    path: req.path,
    originalUrl: req.originalUrl,
    hostname: req.hostname,
    protocol: req.protocol,
    secure: req.secure,
  });
});

app.listen(3000, () => {
  console.info("running in port 3000");
});
