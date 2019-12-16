const express = require("express");
const router = express.Router();
const User = require("../../models/User");


router.delete("/:id", async (req, res) => {

    const { id } = req.params;    

    try {
        const deleteUser = await User.findByIdAndUpdate(id, {state: false})
        
        res.json({ deleteUser }); 

    } catch(error) {
        console.log(error);
        res.status(400).json(error)
    }
})


module.exports = router;