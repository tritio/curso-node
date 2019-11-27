
const employees = [
    {
        id: 1,
        name: "Antonia"
    },
    {
        id: 2,
        name: "Manolo"
    },
    {
        id: 3,
        name: "Ricardo"
    }
]

const salaries = [
    {
        id: 1,
        salary: 12943
    },
    {
        id: 2,
        salary: 48375
    },
    {
        id: 3,
        salary: 37274
    }
]

const getEmployee = (id, callback) => {
    const employee = employees.find((employee) => {
        return employee.id == id;
    })

    if(!employee) {
         callback(`no hay ningún empleado con la id ${id}`)
    } else {
         callback(null, employee);
    }
}

const getSalary = (employee, callback) => {
    const salary = salaries.find((salary) => employee.id == salary.id);

    if(!salary) {
         callback(`el empleado ${employee.name} está en paro`)
    } else {
         callback(null, salary);
    }
}

getEmployee(32, (error, data) => {
    if(error) return console.log(error)
    getSalary(data, (error, data) => {
        if(error) return console.log(error)
        return console.log(data);
    })
})