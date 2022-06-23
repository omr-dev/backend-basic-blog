import path from "path";
import express from "express";

const app = express();
const port = 3000;
const host = "127.0.0.1";

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./site/index.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.resolve("./site/about.html"));
});
app.get("/blog", (req, res) => {
  res.sendFile(path.resolve("./site/blog.html"));
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
