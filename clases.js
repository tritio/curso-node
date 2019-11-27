class Empleado {

    constructor(nombre, apellidos, salario) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.salario = salario;
    }

    obtenerSalario() {
        console.log(this.salario);
    }

    obtenerNombre() {
        console.log(this.nombre);
    }
}

const empleado1 = new Empleado("María", "Jiménez", 67000);

empleado1.obtenerNombre();

// herencia:

class Jefe extends Empleado {      

    constructor(nombre, apellidos, cargo) {
        super(nombre, apellidos) // para coger las propiedades que queramos de la clase Empleado
        this.cargo = cargo;
    }

    despedir() {
        console.log("quedas despedido")
    }

}

const boss1 = new Jefe("Antonia", "López", "Jefe de sección");

boss1.obtenerNombre();
console.log(boss1.cargo);