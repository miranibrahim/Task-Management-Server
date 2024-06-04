// controllers/taskController.js
const { ObjectId } = require("mongodb");
const taskCollection = require("../models/task.model");

const getTasksByEmail = async (req, res) => {
  const email = req.params.email;
  const query = { userEmail: email };
  const result = await taskCollection.find(query).toArray();
  res.send(result);
};

const getTaskById = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await taskCollection.findOne(query);
  res.send(result);
};

const addTask = async (req, res) => {
  const task = req.body;
  const result = await taskCollection.insertOne(task);
  res.send(result);
};

const updateTaskStatus = async (req, res) => {
  const id = req.params.id;
  const status = req.body.status;
  const query = { _id: new ObjectId(id) };
  const updatedDoc = { $set: { status: status } };
  const result = await taskCollection.updateOne(query, updatedDoc);
  res.send(result);
};

const deleteTask = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await taskCollection.deleteOne(query);
  res.send(result);
};

module.exports = {
  getTasksByEmail,
  getTaskById,
  addTask,
  updateTaskStatus,
  deleteTask,
};
