import mongoose from "mongoose";
export async function DBConnect() {
  await mongoose.connect(process.env.DATABASE_URL);
  console.log("Connected!");
}
