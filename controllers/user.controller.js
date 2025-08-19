import { userModel } from "../models/user.model.js";

const register = async (req, res) => {
  try {
    const createUser = await userModel.create(req.body);
    return res
      .status(201)
      .json({ message: "User create successfully", createUser });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default register;
