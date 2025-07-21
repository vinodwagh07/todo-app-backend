const { success } = require("zod");
const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  try {
    const response = await Todo.find({});
    res.status(200).json({
      success: true,
      data: response,
      messgae: "Got All Todos",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      data: e.message,
      message: "Unable to get All todos",
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Todo.findById({
      _id: id,
    });
    res.status(200).json({
      success: true,
      data: response,
      messgae: "Got All Todos",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      data: e.message,
      message: "Unable to get All todos",
    });
  }
};
