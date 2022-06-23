import path from "path";
import express from "express";

const app = express();
const port = 3000;
const host = "127.0.0.1";

app.use(express.static("public"));

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
