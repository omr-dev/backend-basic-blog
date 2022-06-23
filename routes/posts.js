import express from "express";
const postsRouter = express.Router();

postsRouter.get("/new", (req, res) => {
  res.render("add-post");
});
postsRouter.post("/test", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

export default postsRouter;
