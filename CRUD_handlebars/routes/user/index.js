const express = require("express");
const router = express.Router();

router.use("/new", require("./new.js"));
router.use("/update", require("./update.js"));
router.use("/delete", require("./delete.js"));
router.use("/getbyname", require("./getByName.js"));

module.exports = router;