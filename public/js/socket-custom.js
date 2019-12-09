var socket = io()

//Evento disparado al realizar la conexion al server con sockets
socket.on('connect', function(){
    console.log('Conectado al servidor')
})

//Evento disparado al ocurrir una desconexion del server con sockets
socket.on('disconnect', function(){
    console.log('Se perdio la conexion con el servidor')
})

//"on" escucha susesos, "emit" para Enviar informacion al server
//Enviando informacion al servidor
socket.emit('enviarMensaje', {
    usuario: 'Alan',
    mensaje: 'Hola mundo'
    //El callback del servidor
}, function(resp ){
    console.log('Respuesta del servido:', resp)
})

//Escucha informacion del servidor
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor:', mensaje)
})