const express = require("express");
const { generateToken } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/jwt", generateToken);

module.exports = router;
