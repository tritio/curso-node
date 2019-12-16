const express = require("express");
const router = express.Router();
const User = require("../../models/User");


router.get("/:name/:id", async (req, res) => {

    const { name, id } = req.params;    

    try {

       // const userDB = await User.findById(id);    
        const userDB = await User.find({name, _id: id}, { password: 0}) // proyección, no me traigas la password
            

        const userCount = await User.count({name, _id: id}) // al count para que funcione bien hay que pasarle los mismos parámetros que le pasemos al find
            

        res.json({ userDB, userCount}); 

    } catch(error) {
        console.log(error);
        res.status(400).json(error)
    }
})


module.exports = router;