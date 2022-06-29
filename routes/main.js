import express from "express";
const router = express.Router();
import { postModel } from "../models/Post.js";

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/blog", (req, res) => {
  postModel
    .find({})
    .lean()
    .then((posts) => {
      res.render("blog", { posts });
    })
    .catch((err) => {
      console.error(err);
    });
});
router.get("/contact", (req, res) => {
  res.render("contact");
});
router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/register", (req, res) => {
  res.render("register");
});

export default router;
