const express = require("express");
const router = express.Router();
const axios = require("axios")


router.get("/:id", async (req, res) => {

    const { id } = req.params;

    try {
        const response = await await axios.get(`https://api.punkapi.com/v2/beers/${id}`);

        console.log(response.data)
    
        res.render("beerDetails", {cerveza: response.data[0]});

    } catch(error) {
        console.log(error);       
    }
})


module.exports = router;