const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs")
const User = require("../../models/User");

router.post("/", async (req, res) => {
    
    const { email, password, role, name } = req.body;

    try  {
        
            const user = await User.findOne( { email } )
        
            if (user) {
                res.status(409).json({ message: "el usuario ya existe" });
                return;
            }

    } catch(err) {
        console.log(err);
        return res.status(500).json({message: "hubo un problema"})
    }

    const saltRounds = 10;

    const salt = bcrypt.genSaltSync(saltRounds);

    const hashPass = bcrypt.hashSync( password, salt );

    console.log("hassss ", hashPass)


    const user = new User({
        email,
        password: hashPass,
        role,
        name
    })

    try {

      await user.save();
      res.status(200).json({ message: "usuario creado correctamente", user })

    } catch (error) {
        console.log(err);
        res.status(500).json({message: "hubo un problema"});
    }
})



module.exports = router;