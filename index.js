import express from "express";
import cors from "cors";
import postsrouter from "./routers/posts.js";
import { DBConnect } from "./db.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
DBConnect();
app.use("/posts", postsrouter);
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
