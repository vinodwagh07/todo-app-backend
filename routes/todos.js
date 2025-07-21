const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/createTodo");
const { getTodos, getTodoById } = require("../controllers/getTodos");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodoById } = require("../controllers/deleteTodoById");

router.post("/createTodo", createTodo);
router.get("/getTodos", getTodos);
router.get("/getTodos/:id", getTodoById);
router.post("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodoById);

module.exports = router;
