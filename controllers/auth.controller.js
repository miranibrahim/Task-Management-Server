const jwt = require("jsonwebtoken");

const generateToken = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "3h",
    });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Token generation failed" });
  }
};

module.exports = { generateToken };
