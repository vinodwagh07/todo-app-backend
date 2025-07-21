const { success } = require("zod");
const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const response = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );
    res.status(200).json({
      success: true,
      data: response,
      message: "Updated Successfully",
    });
  } catch (e) {
    res.status(500).json({
      error: e.message,
      success: false,
      message: "error occured while inserting",
    });
  }
};
