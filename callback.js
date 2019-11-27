const getUserById = (id, callback) => {
    const user = {
        id: 5,
        name: "Pepa"
    }

    if (id === user.id) callback(null, user)
    else callback("no se encontró ningún usuario")
}

getUserById(51, (error, data) => {
    if(error) {
        return console.log(error)
    }
    return console.log(data);
}) 
    
