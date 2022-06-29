import express from "express";
const postsRouter = express.Router();
import { postModel } from "../models/Post.js";

postsRouter.get("/new", (req, res) => {
  res.render("add-post");
});
postsRouter.get("/:id", (req, res) => {
  const id = req.params.id;

  postModel
    .findById( id )
    .lean()
    .then((post) => {
      res.render("post", { post });
    })
    .catch((err) => {
      console.error(err);
    });
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
