const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const response = await Todo.create({ title, description });
    res.status(200).json({
      success: true,
      data: response,
      message: "todo created sucessfully",
    });
  } catch (e) {
    res.status(500).json({
      error: e,
      success: false,
      message: "error occured while inserting",
    });
  }
};
