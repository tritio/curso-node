const { getMovieById, getMovieByTitle, getMovieByShowtimes }  =  require("./methods");

const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");


const server = http.createServer((request, response) => {

    const parsedUrl = url.parse(request.url);
    // const parsedUrl = url.parse(request.url, true); // el segundo parámetro es opcional, convirtiendo en objeto la query que se le pase
   
    const query = parsedUrl.query;
    console.log(parsedUrl);

    switch(request.url) {

        case "/": 
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/plain");
            response.end("Llamada a la ruta raiz");

            break;


        case `/getMovieById?${query}`:  // con esto acepta cualquier query que se le pase
            const {id}  = querystring.parse(query);
                       
            getMovieById(id, (error, data) => {
                setTimeout(() => {                   
                    if(error) {
                        response.statusCode = 404;
                        response.setHeader("Content-type", "text/plain");
                        response.end(error);
                    } 
                    response.statusCode = 200; 
                    response.setHeader("Content-type", "text/plain");
                    response.end(JSON.stringify(data));
                }, 1000)
            }) 

            break;


        case `/getMovieByTitle?${query}`:                     
            const {title} = querystring.parse(query);
            
            const getAllFilmsByTitle = title => {
                getMovieByTitle(title)
                .then((resultado) => {   
                    response.statusCode = 200; 
                    response.setHeader("Content-type", "text/plain");
                    response.end(JSON.stringify(resultado));                    
                })
                .catch(error => {
                    response.statusCode = 404;
                    response.setHeader("Content-type", "text/plain");
                    response.end(error);
                }) 
            }
            getAllFilmsByTitle(title);

            break;

        
            case `/getMovieByShowtimes?${query}`:                     
            const {times} = querystring.parse(query);            
            
                const getShowTimes = async (times) => {
                    try {
                        const result = await getMovieByShowtimes(times);  // espera a que se ejecute getMovieByShowTimes() para pasarle el valor a result
                        response.statusCode = 200; 
                        response.setHeader("Content-type", "text/plain");
                        response.end(JSON.stringify(result));
                    }
                    catch(error) {
                        response.statusCode = 404;
                        response.setHeader("Content-type", "text/plain");
                        response.end(error);
                    }
               }
               getShowTimes(times);

            break;


        default: 
            response.statusCode = 400;
            response.end("La ruta que indicas no existe")
    }
})

server.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000")
})