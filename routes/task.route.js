// routes/taskRoutes.js
const express = require("express");
const {
  getTasksByEmail,
  getTaskById,
  addTask,
  updateTaskStatus,
  deleteTask,
  updateTask
} = require("../controllers/task.controller");

const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

router.get("/:email", verifyToken, getTasksByEmail);
router.get("/:id", verifyToken, getTaskById);
router.post("/", verifyToken, addTask);
router.patch("/update/:id", verifyToken, updateTask);
router.patch("/:id", verifyToken, updateTaskStatus);
router.delete("/:id", verifyToken, deleteTask);

module.exports = router;
