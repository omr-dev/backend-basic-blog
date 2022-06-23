import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/blog", (req, res) => {
  res.render("blog");
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
router.get("/posts/new", (req, res) => {
  res.render("add-post");
});
router.post("/posts/test", (req, res) => {
  res.redirect("/");
});

export default router;
