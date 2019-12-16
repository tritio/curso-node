const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator'); // para crear validadores de los campos unique
const Schema = mongoose.Schema;

// creamos una instancia de la clase Schema:

const userSchema = new Schema({

    name: { 
        type: String,
        required: [ true, "Name es obligatorio"], // dos valores, booleano si es requerido o no, y string con mensaje de error        
    },
    email: {
        type: String,
        required: [ true, "email es obligatorio"],
        unique: true
    },
    password: {
        type: String,
        required: [ true, "password es obligatorio"]
    },
    state: {
        type: Boolean,       
        default: true // valor por defecto
    },
    role: {
        type: String,
        default: "USER_ROLE",
        enum: {
            values: ["USER_ROLE", "ADMIN_ROLE"],
            message: "{VALUE} no es un valor válido"
        }
    },
    fecha: {
        type: Date,
        default: Date.now
    }
}, { 
    timestamps: true,
    createdAt: true
})


userSchema.plugin(uniqueValidator, {message: "{PATH} debe ser único "})  // ver en npm su funcionalidad

// CREAMOS EL MODELO

module.exports = mongoose.model("User", userSchema);