// models/taskModel.js
const { client } = require("../config/db");

const taskCollection = client.db("TaskManagementDB").collection("tasks");

module.exports = taskCollection;
