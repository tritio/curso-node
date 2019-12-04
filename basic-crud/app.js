const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs');
const bodyParser = require('body-parser');

const validateUser = require("./validations/user")
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); 
// parse application/json
app.use(bodyParser.json());

const usersBuffer = fs.readFileSync("./data.json");
let users;
try{    
    users = JSON.parse(usersBuffer);
} catch(error) {
    users = [];
}



app.get("/getusers", (req, res) => {
    
   // const query = req.query;    
   /*  const usersBuffer = fs.readFileSync("./data.json");
    const users = JSON.parse(usersBuffer);  */     
   // res.json(users)

   if(!users || !users.length) {
       res.status(404).json({message: "No hay usuarios en la base de datos"})
   }
   
    res.status(200).json(users);
});

// para crear elemento
app.put("/newuser", (req, res) => {   
    
    const { username, password, age, email } = req.body;  // recibe los campos y sus valores con la deconstrucción del objeto   
    
    // este objeto será los campos que recibirá el body
    const user = {
        id: users.length + 1,
        username,
        password,
        age,
        email
    }

    try {

        validateUser(user)  
        users.push(user);        

    }catch(error) {

        console.log(error);
        if(error.status)
            res.status(err.status).json({message: err.message, ok: err.ok})
        else res.status(500).json({message: "error interno de servidor"})
    }


   fs.writeFileSync("./data.json", JSON.stringify(users, null, 4));
    res.status(200).json({message: "usuario creado correctamente"});   
    
})

// para actualizar elemento
app.post("/updateuser/:id", (req, res) => {
    const { username, password, age, email } = req.body;
    const {id} = req.params;
   /*  const usersBuffer = fs.readFileSync("./data.json");
    const users = JSON.parse(usersBuffer);  */
    const newUserJSON = users.map((user) => {
        if(user) {
            if(user.id == id) {
                user.username = username ? username : user.username;
                user.password = password ? password : user.password;
                user.age = age ? age : user.age;
                user.email = email ? email : user.email;
            }
            return user;
        } else {
            return null;
        }
       
    });

    fs.writeFileSync("./data.json", JSON.stringify(newUserJSON, null, 4));
    res.status(200).json({message: "usuario ACTUALIZADO correctamente"});   
})


app.delete("/user/:id", (req, res) => {
    const { id } = req.params;
    
    users[parseInt(id) -1 ] = null;
    console.log(users)

    fs.writeFileSync("./data.json", JSON.stringify(users, null, 4));
    res.status(200).json({message: "usuario BORRADO correctamente"});  
})



app.use((req, res) => {
    res.status(404).json({message: "página no encontrada majo"});
}) // respuesta por defecto. Se pone al final de la app, si no pasa por ningún get, salta este

app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${PORT}` )
});