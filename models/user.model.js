// models/userModel.js
const { client } = require("../config/db");

const userCollection = client.db("TaskManagementDB").collection("users");

module.exports = userCollection;
