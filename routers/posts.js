import express from "express";
import { createPosts, getAllPosts } from "../controllers/posts.js";
const router = express.Router();
router.get("/", getAllPosts);
router.post("/", createPosts);
export default router;
