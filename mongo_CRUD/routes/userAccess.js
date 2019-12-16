const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs")

const isLoggedIn = require("../middlewares/isLoggedIn");

// esto es una forma de crear un middleware, lo hacemos mejor en una carpeta a parte y lo requerimos

/* router.use((req, res, next) => {
    
     if(req.session.currentUser) {
        next();
    } else {
        res.status(401).json({message: "No autorizado"})
    } 


}) */
// middleware isLoggedIn en el router:

router.get("/", isLoggedIn , async (req, res, next) => {


    res.status(200).json({ message: " Bienvenido usuario"});

})


module.exports = router;