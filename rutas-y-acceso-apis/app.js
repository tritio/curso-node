require('dotenv').config();
// npm i dotenv

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");

const index = require("./routes/")
const users = require("./routes/users");
const restaurantes = require("./routes/restaurantes");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/", index);
app.use("/user", users);
app.use("/restaurantes", restaurantes);



app.use((req,res) => {
    res.status(404).json({message: "Not found"})
})


app.listen(PORT, ()=> {
    console.log(` escuchando por el puerto`, PORT)
})