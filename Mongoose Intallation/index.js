// server.js
import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

await mongoose.connect("mongodb://localhost:27017/todoApp");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const todo = new Todo({
    name: "My First Todo",
    desc: "Hello Todo",
    isDone: true,
  });

  await todo.save(); // save document
  res.send("Todo saved successfully!!!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
