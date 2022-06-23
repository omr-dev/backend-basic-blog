import path from "path";
import express from "express";
import { engine } from "express-handlebars";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./routes/main.js";
import postsRouter from "./routes/posts.js";

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

//body-parser installation
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routing
app.use("/", router);
app.use("/posts", postsRouter);

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
