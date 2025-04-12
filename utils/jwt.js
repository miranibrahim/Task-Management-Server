const jwt = require("jsonwebtoken");

app.post("/jwt", (req, res) => {
  const user = req.body;

  if (!user || !user.email) {
    return res.status(400).send({ message: "Invalid user data" });
  }

  // Create a token
  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: "7d", // Token validity
  });

  res.send({ token });
});
