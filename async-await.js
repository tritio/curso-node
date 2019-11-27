const getTime = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("primer promesa");
            if(5 === 10) {
                resolve(2000);
            }
            reject("ha ocurrido un error");
        }, 2000)
    })
}

const getResult = async () => {
    const result = await getTime();  // espera a que se ejecute getTime() para pasarle el valor a result
    console.log(result);
}

const as = async () => {
    try {
        console.log("inicio inicio");
        console.log(await getResult());
        console.log("fin del programa");

    } catch(error)  {
        console.log(error)
    }    
}

as();
