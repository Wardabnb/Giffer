import mongoose, { Schema } from "mongoose";
const postSchema = new Schema(
  {
    src: String,
    user: {
      username: String,
    },
  },
  { timestamps: true }
);
export const Post = mongoose.model("Post", postSchema);
