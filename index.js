const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { connectDB } = require("./config/db");

const userRoutes = require("./routes/user.route");
const taskRoutes = require("./routes/task.route");
const authRoutes = require("./routes/auth.route");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);
app.use("/", authRoutes);

app.get("/", (req, res) => {
  res.send("running ar running!");
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
});
