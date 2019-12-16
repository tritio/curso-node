const express = require("express");
const router = express.Router();

const isAdminRole = require("../middlewares/isAdminRole");

// middleware isLoggedIn en el router:

router.get("/", isAdminRole , async (req, res, next) => {

    res.status(200).json({ message: " Bienvenido ADMINISTRADOR"});

})


module.exports = router;