// routes/taskRoutes.js
const express = require("express");
const {
  getTasksByEmail,
  getTaskById,
  addTask,
  updateTaskStatus,
  deleteTask,
} = require("../controllers/task.controller");
const router = express.Router();

router.get("/:email", getTasksByEmail);
router.get("/:id", getTaskById);
router.post("/", addTask);
router.patch("/:id", updateTaskStatus);
router.delete("/:id", deleteTask);

module.exports = router;
