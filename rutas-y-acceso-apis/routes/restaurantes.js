const express = require('express');
const router = express.Router();

router.get("/all", (req, res) => {
    
    res.status(200).json({message: "hola desde index router users ALL restaurantes"})
});
router.get("/byId", (req, res) => {
    
    res.status(200).json({message: "hola desde index router users BYID restaurantes"})
})

module.exports = router;