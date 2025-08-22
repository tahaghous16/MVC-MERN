import { userModel } from "../models/user.model.js";

const controller = {
  //CREATE User
  createUser: async (req, res) => {
    const { email } = req.body;
    try {
      const existingUser = await userModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "Email already exists!" });
      }

      const userAdded = await userModel.create(req.body);
      res.status(201).json({ message: "User create successfully", userAdded });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  //Read (Get Users)
  readUser: async (req, res) => {
    try {
      const showAll = await userModel.find();
      res.status(200).json(showAll);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default controller;
