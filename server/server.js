const express = require('express');
const socketIO = require('socket.io')
const path = require('path');
const http = require('http')

//Se crea un servidor de produccion con el modulo http
const app = express();
let server = http.createServer(app)

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 4200;

app.use(express.static(publicPath));

//Importacion de la libreria io que contiene la estancia de lo sockets
module.exports.io = socketIO(server)
require('./sockets/socket')

server.listen(port, (err) => {

    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});

