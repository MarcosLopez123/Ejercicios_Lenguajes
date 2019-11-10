const {createServer} = require("http");
let server =createServer((request, response) =>{
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hola a todos</h1><p>Server Web Activo MAteria Lengujaes y autómatas </p>");
    response.end();
});

server.listen(8000);

console.log("Servidor en escucha en puerto 8000");