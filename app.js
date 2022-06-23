import path from "path";
import express from "express";
import { engine } from "express-handlebars";

const app = express();
const port = 3000;
const host = "127.0.0.1";

app.use(express.static("public"));

//handlebars installation
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/blog", (req, res) => {
    res.render("blog");
  });
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve("./site/index.html"));
// });


app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
