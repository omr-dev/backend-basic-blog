import mongoose from "mongoose";
import { postModel } from "./models/Post.js";

mongoose.connect("mongodb://localhost:27017/nodeblog_test_db");

postModel.create(
  { title: "Test Post", content: "This is a test post" },
  (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
    }
  }
);
