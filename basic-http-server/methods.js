const peliculas = require("./moviesData");

    

const getMovieById = (id, callback) => {
    const pelicula = peliculas.find((peli) => {
        return peli.id == id;
    })
    if(pelicula) {
        callback(null, pelicula)
    }
    else {
        callback("no se ha encontrado esa película")
    }
}


const getMovieByTitle = (title) => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            console.log("********************************************************");
            console.log("                   CON PROMESAS                         ");
            console.log("********************************************************"); 
            const pelis = peliculas.filter((peli) => {              
              return peli.title.startsWith(title);
            })
            if(pelis.length > 0){               
                resolve(pelis)
            }
             reject(`No se ha encontrado ninguna película que empiece por ${title}`)
                
                    
            
        }, 2000)       
            
    })
}

/* getMovieByTitle("The")
.then((resultado) => {   
       console.log(resultado)   
})
.catch(error => console.log(error))  */

   

 const getMovieByShowtimes = (times)=> {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            console.log("********************************************************");
            console.log("                   CON ASYNC - AWAIT                    ");
            console.log("********************************************************");   
            const horarios = peliculas.filter(peli => {
                return peli.showtimes.includes(times);
            })
            if(horarios.length > 0) {
                resolve(horarios)
            }
            reject(`No se ha encontrado ninguna película que comience a las ${times}`)
        }, 4000)
    })
 }

 const getShowTimes = async (hora) => {
     try {
         const result = await getMovieByShowtimes(hora);  // espera a que se ejecute getMovieByShowTimes() para pasarle el valor a result
         console.log(result);
     }
     catch(error) {
        console.log(error)
     }
}

// getShowTimes("15:30");  


 module.exports = { getMovieById, getMovieByTitle, getShowTimes }