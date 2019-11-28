const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");


const server = http.createServer((request, response) => {

    const parsedUrl = url.parse(request.url);
    // const parsedUrl = url.parse(request.url, true); // el segundo parámetro es opcional, convirtiendo en objeto la query que se le pase
    console.log(parsedUrl);

    const query = parsedUrl.query;

    switch(request.url) {

        case "/": 
            response.statusCode = 200;
            response.setHeader("Content-Type", "text/plain");
            response.end("Llamada a la ruta raiz");
            break;

        case "/image":
            const image = fs.readFileSync("./imagen1.jpg");
            response.statusCode = 200;
            response.setHeader("Content-Type", "image/jpg");
            response.end(image);
            break;

        case `/html?${query}`:  // con esto acepta cualquier query que se le pase

            const { nombre } = querystring.parse(query);

            response.statusCode = 200;
            response.write("<div>");
            response.write(`<h1> Hola que tal ${nombre}</h1>`);
            response.write("</div>");
            response.end();
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