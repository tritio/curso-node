const express = require("express");
const router = express.Router();
const User = require("../../models/User");


router.post("/", async (req, res) => {
    const body = req.body;

    const user = new User(body);

    try {

        const userDB = await user.save();
        res.status(200).json({ userDB });

    } catch(error) {
        console.log(error);
        res.status(400).json({ error: error.message, error: error.errors, status: 400, ok: false  })
    }

})

module.exports = router;