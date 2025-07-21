const { success } = require("zod");
const Todo = require("../models/Todo");

exports.deleteTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    await Todo.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      message: "Delete todo sucessfully",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "error while deleting todo",
    });
  }
};
