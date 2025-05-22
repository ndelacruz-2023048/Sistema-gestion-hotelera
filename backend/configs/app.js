`use strict`

import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cors from "cors"
import cookieParser from "cookie-parser"
import { Server as SocketServer } from 'socket.io'
import http from 'http'
import authRoutes from '../src/Auth/auth.routes.js'
import userRoutes from '../src/User/user.routes.js'
import HotelRoutes from '../src/hotel/hotel.routes.js'
import RoomRoutes from '../src/room/room.routes.js'
import RoomDetailsRoutes from '../src/RoomDetails/roomDetails.routes.js'
import RoomViewRoutes from '../src/roomView/roomView.routes.js'
import eventRoutes from '../src/event/event.routes.js'
import adminApi from "../src/Auth/auth.admin.routes.js"
import adminHotel from "../src/Auth/auth.adminHotel.routes.js"
import client from "../src/Auth/auth.user.routes.js"
import { limiter } from '../middlewares/rate.limit.js'
import swaggerUI from "swagger-ui-express"
import swaggerJsDoc from "swagger-jsdoc"
import ReservationRoutes from '../src/reservation/reservation.routes.js'
import StatisticsRoutes from '../src/statistics/statistics.routes.js'
const configs = (app) =>{
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use(cors(
        {
            origin: 'http://localhost:5173', // O el origen de tu frontend
            credentials: true, // ¡Esto es crucial!
        }
    ))
    app.use(helmet())
    app.use(morgan('dev'))
    app.use(cookieParser())
    app.use(limiter)
}

const optionsSwagger = {
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Hotel Avenis API",
            version:"0.0.0",
            description:"A complete Hotel Managment API"
        },
        servers:[
            {
                url:"http://localhost:3000"
            }
        ],
    },
    apis:["./src/**/*.js"]
}

const docsApi = (app)=>{
    const specs = swaggerJsDoc(optionsSwagger)
    app.use("/v1/docs",swaggerUI.serve,swaggerUI.setup(specs))
}



const routes = (app) =>{
    app.use('/v1/hotelhavenis/auth', authRoutes)
    app.use('/v1/hotelhavenis/user', userRoutes)
    app.use('/v1/hotelhavenis/events', eventRoutes)
    app.use('/v1/hotelhavenis/hotels', HotelRoutes)
    app.use('/v1/hotelhavenis/rooms', RoomRoutes)
    app.use('/v1/hotelhavenis/room-details', RoomDetailsRoutes)
    app.use('/v1/hotelhavenis/room-view', RoomViewRoutes)
    app.use('/v1/hotelhavenis/admin', adminApi)
    app.use('/v1/hotelhavenis/adminHotel',adminHotel )
    app.use('/v1/hotelhavenis/client', client)
    app.use('/v1/hotelhavenis/reservation', ReservationRoutes)
    app.use('/v1/hotelhavenis/statistics', StatisticsRoutes)
}

    


export const initServer = ()=>{
    const app = express()
    const server = http.createServer(app)
    const io = new SocketServer(server, {
        cors: 'http://localhost:5173'
    })

    io.on('connection', socket => {
        console.log('Cliente Socket.IO conectado:', socket.id);

        socket.on('newEvent', (message) => {
            console.log(`Mensaje Socket.IO recibido de ${socket.id}:`, message);
        io.emit('newEvent', message)
        socket.emit('newEvent', `Servidor dice (${socket.id}): ${JSON.stringify(message)}`);
        console.log('newEvent', `Servidor dice (${socket.id}): ${JSON.stringify(message)}`);
        
        });


        socket.on('disconnect', () => {
            console.log('Cliente Socket.IO desconectado:', socket.id);
        });

        socket.on('error', (error) => {
            console.error('Error en Socket.IO:', error);
        });

        socket.emit('welcome', '¡Bienvenido a Socket.IO desde el servidor!');
    });


    try{
        configs(app)
        routes(app)
        docsApi(app)
        server.listen(process.env.PORT)
        console.log(`Server express and socket, running in port: ${process.env.PORT}`)
    }catch(err){
        console.error('Server init failed', err)
    }
}