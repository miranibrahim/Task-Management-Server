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

const allowedOrigins = [
  'http://localhost:5173', // local dev
  'https://task-management-client-weld.vercel.app', // deployed frontend
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('CORS not allowed from this origin'));
    }
  },
  credentials: true
}));
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
