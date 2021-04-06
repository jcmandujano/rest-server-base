const express = require('express')
const cors = require('cors')

class Server {

    constructor(){
        this.app = express()
        this.port =  process.env.PORT
        this.usersRoute = '/api/users'
        //Middleware
        this.middlewares()
        //Rutas de mi aplicacion
        this.routes()
    }

    middlewares(){
        //Directorio Publico
        this.app.use(express.static('public'))
        //CORS
        this.app.use(cors())
    }

    //creamos via express las rutas al endpoint y asignamos las operaciones deseadas
    routes(){
       this.app.use(this.usersRoute,require('../routes/user.routes'))
    }

    //iniciamos el rest server por el puerto configurado en environment
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto', this.port)
        })
    }

}

module.exports = Server