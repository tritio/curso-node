const express = require("express");
const router = express.Router();



router.use("/all", require("./allBeers"));
router.use("/details", require("./beerDetails"));

module.exports = router;