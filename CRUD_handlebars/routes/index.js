const express = require("express");
const router = express.Router();


router.get("/home", (req, res) => {

    const data = {
       // nombre: "Gonza",
        ciudades: ["Murcia", "Madrid", "Valencia"]
    }
    res.render("home", data)

})


router.get("/about", (req, res) => {
    
    res.render("about")

})




module.exports = router;