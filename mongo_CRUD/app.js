require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const SERVER_PORT = process.env.SERVER_PORT || 5000;
const DB_PORT = process.env.DB_PORT;

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use("/users", require("./routes/user"));

mongoose
    .connect(`mongodb://localhost:${DB_PORT}/app`, {
         useNewUrlParser: true,
         useUnifiedTopology: true
    })
    .then(() => console.log(`conectado a mongo en el puerto ${DB_PORT}`))
    .catch(err => {
        throw err;
    })


app.use((req, res) => {  

    res.statusCode(404).json({message: "route not found"});

})

app.listen(SERVER_PORT, () => {
    console.log(`escuchando en el puerto ${SERVER_PORT}` )
});

