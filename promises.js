const getTime = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("primer promesa");
            resolve(2000)
        }, 2000)
    })
}

getTime()
.then((time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("segunda promesa");
            resolve("FIN de la cadena de promesas")
        }, time)
    })
})
.then(message => console.log(message))
.then(() => console.log("otro mensaje"))
.catch(error => console.log(error))