const nombre = "gonza";

console.log(`Esto es un string template , aquí mi nombre: ${nombre}`)


// destructuración de un objeto:

let employee = {
    name: "gonza",
    lastname: "gómez",
    salary: "40000"
}

/* 
function getSalary(employee) {
    let { name, lastname, salary } = employee;
    console.log(`el nombre es: ${name} y su salario: ${salary}`);
}

 */

// otra forma de desestructurar en los parámetros de la función:

function getSalary({ name, lastname, salary }) { 
    console.log(`el nombre es: ${name} y su salario: ${salary}`);
}

getSalary(employee)

// otra forma de recibir parámetros y asignarlos:
const getEmployee = (name, lastname, salary) => {
    let employee = { name, lastname, salary }
    return employee;
}