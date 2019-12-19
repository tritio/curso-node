const express = require("express");
const router = express.Router();
const User = require("../../models/User");

router.use("/signup", require("./signup.js"));
router.use("/login", require("./login.js"));
router.use("/logout", require("./logout.js"));


module.exports = router;