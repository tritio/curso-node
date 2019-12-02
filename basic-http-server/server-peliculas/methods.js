const peliculas = require("./moviesData");

    
// callback: 
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


// promesas:
const getMovieByTitle = (title) => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
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

   
// async - await: 
 const getMovieByShowtimes = (times)=> {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {  
            const horarios = peliculas.filter(peli => {
                return peli.showtimes.includes(times);
            })
            if(horarios.length > 0) {
                resolve(horarios)
            }
            reject(`No se ha encontrado ninguna película que comience a las ${times}`)
        }, 2000)
    })
 }


 module.exports = { getMovieById, getMovieByTitle, getMovieByShowtimes }