const express = require('express');
const app = express();
const PORT = 3000;

/*
        NODEMON, para no tener que tirar el servidor cada vez que hagamos un cambio:
        npm i --global nodemon
        Para ejecutar la primera vez: nodemon app.js

*/

app.get("/", (request, response, next) => {
    response.send({message: "hola mundo"})
});

app.get('/home', (req, res)=> {    
    res.sendFile( __dirname + "/views/home.html")
});

app.get('/about', (req, res)=> {    
    res.sendFile( __dirname + "/views/about.html")
});

app.use(express.static(__dirname + "/public"))
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`))