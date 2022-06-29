import express from "express";
const postsRouter = express.Router();
import { postModel } from "../models/Post.js";

postsRouter.get("/new", (req, res) => {
  res.render("add-post");
});
postsRouter.post("/test", (req, res) => {
  postModel.create(req.body, (err, post) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
});

export default postsRouter;
