const express = require('express');
const router = express.Router();
const axios = require("axios");

const URL = process.env.JSON_PLACEHOLDER_URL;

router.get("/json/:id",async (req, res) => {
    try {
        const { id } = req.params;
        const urlGet = `${URL}/posts/${id}`;
    
        //llamada api externa:
        const response = await axios.get(urlGet);
    
        console.log(response.data);    
        res.status(200).json(response.data)

    } catch(error) {
        console.log(error);
        res.status(400).json({error})
    }
})


router.post("/json",async (req, res) => {
    try {
        const { body } = req;  // desestructuro, cojo el campo body que llega de req y lo asignamos a la constante body
        const urlPost = `${URL}/posts/`;
    
        //llamada api externa:
        const response = await axios.post(urlPost, body);
    
        console.log(response.data);    
        res.status(200).json(response.data)

    } catch(error) {
        console.log(error);
        res.status(400).json({error})
    }
})


router.put("/json/:id",async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;  // desestructuro, cojo el campo body que llega de req y lo asignamos a la constante body
        const urlPost = `${URL}/posts/${id}`;
    
        //llamada api externa:
        const response = await axios.put(urlPost, body);
    
        console.log(response.data);    
        res.status(200).json(response.data)

    } catch(error) {
        console.log(error);
        res.status(400).json({error})
    }
})

router.delete("/json/:id",async (req, res) => {
    try {
        const { id } = req.params;  
        const urlDelete = `${URL}/posts/${id}`;    
       
        const response = await axios.delete(urlDelete);
    
        console.log(response.data);    
        res.status(200).json(response.data)

    } catch(error) {
        console.log(error);
        res.status(400).json({error})
    }
})

module.exports = router;