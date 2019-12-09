/* Notas de la seccion:
   -------------------------------------------
  IO - (Input-Output) Establece una comunicacion del backend para soportar sockets
  socketOI(server)    Es la funcion de socket que inicializa el uso de sockets en el servidor, este se guarda en la variable "io"
  io.on()             La funcion "on()" de lo socket es la que detecta los eventos ocurrido en el servidor y en el cliente
                      existen viarios eventos que puede deterta la funcion on
    'connection'      Es el evento de conexion al servidor o el cliente este ocurre cada que se inicializa el servidor o se ingresa la url
                      el navegador.
    'disconnect'      Este es el evento que detecta la desconexion del servidor o de un cliente en el navegador
  .client             Este es el objeto de socket que detecta la informacion y los eventos ocurrido en un cliente web
  .callback           A este objecto se le hace referencia cuando ocurre una evento en el cliente y se debe ejecutar en el servidor
                      este es el callback tras la ejecucion de un "emit", siempre se ejecuatn despues del emit
  .broadcast          Propiedad de client que permite emitir y enviar informacion a todos los clientes dentro de una aplicacion, es la propiedad
                      que permite enviar informacion a todos los clientes
*/

const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado')

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la aplicacion'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    })

    //Escuchar el cliente
    //client.on('nombre_del_evento_cliente'm (informacion_enviada, callback_funcion_de_respuesta_server))
    client.on('enviarMensaje', (data, callback) => {
        console.log(data)

        client.broadcast.emit('enviarMensaje', data)

        // if(mensaje.usuario){
        //     callback({
        //         respuesta: 'Todo salio bien'
        //     })
        // } else {
        //     callback({
        //         respuesta: 'Error en la peticion!!'
        //     })
        // }
    })

})