/*const { createServer} = require("net");

var server = createServer();
var port = 4001;

server.on('listening', function(){
    console.log('Servidor escuchando en puerto 4001');
});

server.on('connection', function(socket){
    console.log('El servidor tiene una nueva conexcion..');
    socket.write("ya puedes escribir");
   // socket.end();
    //server.close();
});

server.on('close', function(){
    console.log('El servidor esta cerrado..');
});

server.on('error', function(err){
    console.log('Error en la conexion..', err.message);
});
server.listen(port);

*/

var net = require('net');
 
var server = net.createServer();

var socket=[];

server.on('connection', function(socket){
    console.log('Nueva Conexion');

    sockets.push(socket);

    socket.on('data', function(data){
        console.log('got data:',  data);

        sockets.forEach(function(otherSocket){
            if(otherSocket!== socket){
                otherSocket.write(data);
            }
        });
    });

    socket.on('close', function(){
        console.log('conexion Cerrada');
        var index = sockets.indexOf(socket);
        sockets.splice(index, 1);
    });

});  // fin de connection

server.on('error', function(err){
    console.log('Error del server:', err.message );

});
server.on('close', function(){
    console.log('servidor cerrado');

});

server.listen(4001);