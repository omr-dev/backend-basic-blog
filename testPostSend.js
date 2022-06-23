import mongoose from "mongoose";
import { postModel } from "./models/Post.js";

mongoose.connect("mongodb://localhost:27017/nodeblog_test_db");

postModel.findByIdAndDelete("62b49880bfc1fd2c6ce53bc9", (err, post) => {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});
// postModel.findByIdAndUpdate(
//   "62b49880bfc1fd2c6ce53bc9",
//   { title: "this an updated second title" },
//   (err, posts) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(posts);
//     }
//   }
// );

// postModel.find({title:'Test Post'}, (err, posts) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// postModel.create(
//   { title: "Test Post 2", content: "This is second test post" },
//   (err, result) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(result);
//     }
//   }
// );
