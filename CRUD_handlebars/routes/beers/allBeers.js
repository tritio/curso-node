const express = require("express");
const router = express.Router();
const axios = require("axios")


router.get("/", async (req, res) => {

    try {
        const response = await await axios.get("https://api.punkapi.com/v2/beers");

        console.log(response.data)
    
        res.render("beers", {cervezas: response.data});

    } catch(error) {
        console.log(error);       
    }
})


module.exports = router;