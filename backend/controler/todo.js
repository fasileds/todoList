import Todo from "../models/todo.js";
export const createTodo = async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while saving the Todo." });
  }
};
export const getTodo = async (req, res) => {
  try {
    const todoLists = await Todo.find();
    res.json(todoLists);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const updatedfile = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatedfile);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const delateTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.send("delated succesfully");
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getOneTodo = async (req, res) => {
  try {
    const oneTodo = await Todo.findById(req.params.id);
    res.json(oneTodo);
  } catch (error) {
    res.status(500).json(error);
  }
};
