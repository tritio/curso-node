require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const SERVER_PORT = process.env.SERVER_PORT || 5000;
const DB_PORT = process.env.DB_PORT;
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);


//configuración para las vistas con handlebars:
app.use(express.static(__dirname + "public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// Use the session middleware
app.use(session({ 
    secret: 'basic-auth', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // para protocolo https o no
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
}))

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use("/", require("./routes/index.js"));
app.use("/users", require("./routes/user"));
app.use("/auth", require("./routes/auth"));
app.use("/userAccess", require("./routes/userAccess"));
app.use("/adminAccess", require("./routes/adminAccess"));
app.use("/beers", require("./routes/beers"));



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

    res.status(404).json({message: "route not found"});

})

app.listen(SERVER_PORT, () => {
    console.log(`escuchando en el puerto ${SERVER_PORT}` )
});

