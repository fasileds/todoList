import express from "express";
import todoRouter from "./routes/todoRoutes.js";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.listen(3000, () => {
  console.log("the app is runing on port 300");
});
mongoose.connect(process.env.MONGO, () => {
  console.log("the data base is coonected successull");
});
app.use("/api/todo", todoRouter);
