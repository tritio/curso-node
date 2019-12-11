
    Todas las compañías cuyo nombre coincida con 'Babelgum'. Devuelve solo el campo name.
    {name: "Babelgum"}
    projectar {name: 1, _id: 0} // así no saldría el id
    
    Todas las compañías que tengan más de 5000 empleados. Limita la búsqueda a 20 compañías y devuelve la información ordenada descendentemente por el número de empleados (number_of_employees)
    {number_of_employees: {$gt: 5000}}
    sort {number_of_employees: 1}

    Todas las compañías que hayan sido fundada entre el año 2000 y 2005, ambos incluídos. Devuelve sólo el campo name y el founded_year
    {$and : [{founded_year: {$gte: 2000}}, {founded_year: {$lte: 2005}}]} 
    project {name: 1, founded_year: 1, _id: 0}

    Todas las compañías cuyo importe de valoración sea mayor que 100.000.000 y que haya sido fundada antes de 2010. Devuelve solo los campos name y ipo
    {$and: [{"ipo.valuation_amount": {$gt: 100000000}}, {founded_year: {$lt: 2010}} ]}

    Ordena todas las compañías por el campo ipo en orden descendente.
    sort {ipo: -1}

    Todas las compañías que no incluyan el campo partners.
    {partners: {$exists: 0}}

    Todas las compaías que tengan al menos 100 empleados pero menos de 1000. Devuelve sólo el campo name y number_of_employees
    

    Todas las compañías que tengan menos de 1000 empleados y que hayan sido fundadas antes de 2005. Ordénalas por el número de empleados ascendentemente y limita la busqueda a 10 compañías.
    Recuperas las 10 compañías con más empleados ordenados por number_of_employees descendentemente.
    Todas las compañías fundadas en el segundo semestre del año. Limita la búsqueda a 1000 empresas.
    Todas las compañías fundadas antes del 2000 que tengan un valor de adquisición mayor que 10.000.000.
    Todas las compañías adquiridas (acquired) después de 2010 ordenadas por la cuenta de adquisición (amount_acquisition) y devuelve sólo su nombre y el campo acquisition.
    Ordena las empresas por orden de fundación y devuelve sólo el nombre y el año de fundación.
    Todas las compañías que sean de la categoría web y tengan más de 4000 empleados. Ordenalos por número de empleados en orden ascendente.


    OTRAS COSAS:

    Para ver si existe un campo concreto: 
    {name: { $exists: 1}}