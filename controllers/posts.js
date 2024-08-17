import { Post } from "../models/posts.js";

export async function getAllPosts(req, res) {
  const posts = await Post.find();
  res.json(posts);
}
export async function createPosts(req, res) {
  console.log("req", req.body);

  const newPost = await Post.create(req.body);
  res.json({ message: "New post created" });
}
