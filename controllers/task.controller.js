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

const updateStatus = async (req, res) => {
  const id = req.params.id;
  const status = req.body.status;
  const query = { _id: new ObjectId(id) };
  const updatedDoc = { $set: { status: status } };
  const result = await taskCollection.updateOne(query, updatedDoc);
  res.send(result);
};

const updateTask = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const query = { _id: new ObjectId(id) };
  const updateDoc = {
    $set: {
      title: data.title,
      description: data.description,
      priority: data.priority,
      deadline: data.deadline,
    },
  };

  try {
    const result = await taskCollection.updateOne(query, updateDoc);
    if (result.modifiedCount > 0) {
      res.status(200).send({ message: "Task updated successfully" });
    } else {
      res.status(404).send({ message: "No task found or no changes made" });
    }
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
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
  updateStatus,
  deleteTask,
  updateTask
};
