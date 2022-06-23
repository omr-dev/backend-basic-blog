import path from "path";
import express from "express";
import { engine } from "express-handlebars";
import mongoose from "mongoose";

const app = express();
const port = 3000;
const host = "127.0.0.1";

app.use(express.static("public"));

//mongoose installation
mongoose.connect("mongodb://localhost:27017/nodeblog_db");

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
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
