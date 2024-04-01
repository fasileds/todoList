import express from "express";
import {
  createTodo,
  delateTodo,
  getOneTodo,
  getTodo,
  updateTodo,
} from "../controler/todo.js";
const routes = express.Router();
routes.post("/createtodo", createTodo);
routes.get("/", getTodo);
routes.get("/:id", getOneTodo);
routes.delete("/delate/:id", delateTodo);
routes.put("/update/:id", updateTodo);
export default routes;
