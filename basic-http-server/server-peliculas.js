const { getMovieById, getMovieByTitle, getShowTimes }  =  require("./methods");

const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");


const server = http.createServer((request, response) => {

    const parsedUrl = url.parse(request.url);
    // const parsedUrl = url.parse(request.url, true); // el segundo parámetro es opcional, convirtiendo en objeto la query que se le pase
   // console.log(parsedUrl);

    const query = parsedUrl.query;

    switch(request.url) {

        case "/": 
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/plain");
            response.end("Llamada a la ruta raiz");
            break;

        case `/getMovieById?${query}`:  // con esto acepta cualquier query que se le pase

            const {id}  = querystring.parse(query);
            console.log(id)
           
            getMovieById(id, (error, data) => {
                setTimeout(() => {                   
                    if(error) {
                        response.statusCode = 404;
                    } 
                    response.statusCode = 200; 
                    response.end(JSON.stringify(data));
                }, 1000)
            }) 

            /* response.statusCode = 200;           
            response.end(); */
            break;

        case "/html2":
            const html = fs.readFileSync("./html.html");
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/html");
            response.end(html);
        
        default: 
            response.statusCode = 400;
            response.end("La ruta que indicas no existe")
    }
})

server.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000")
})