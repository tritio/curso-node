const express = require("express");
const router = express.Router();
const User = require("../../models/User");

router.put("/:id", async (req, res) => {

    const { id } = req.params;
    const body = req.body;    

    try {

        const options = {
            new: true,
            runValidators: true, 
            useFindAndModify: true
        }

        const userDB = await User.findByIdAndUpdate(id, body, options);       
        res.json({ userDB }); // no es necesario poner status si devuelve la respuesta, pues sería 200 por defecto

    } catch(error) {
        console.log(error);
        res.status(400).json(error)
    }

})

module.exports = router;