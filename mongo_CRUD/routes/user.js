const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/new", async (req, res) => {
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

router.put("/update/:id", async (req, res) => {

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

router.get("/get/:name/:id", async (req, res) => {

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


router.delete("/delete/:id", async (req, res) => {

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