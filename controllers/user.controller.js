// controllers/userController.js
const userCollection = require("../models/user.model");

const getUsers = async (req, res) => {
  const result = await userCollection.find().sort({ role: 1 }).toArray();
  res.send(result);
};

const addUser = async (req, res) => {
  const user = req.body;
  const query = { email: user.email };
  const isExist = await userCollection.findOne(query);
  if (isExist) {
    return res.send({ message: "user exists", insertedId: null });
  }
  const result = await userCollection.insertOne(user);
  res.send(result);
};

module.exports = {
  getUsers,
  addUser,
};
