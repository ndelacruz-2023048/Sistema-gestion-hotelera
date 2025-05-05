`use strict`

import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cors from "cors"
import cookieParser from "cookie-parser"
import authRoutes from '../src/Auth/auth.routes.js'
import userRoutes from '../src/User/user.routes.js'
import HotelRoutes from '../src/hotel/hotel.routes.js'
import RoomRoutes from '../src/room/room.routes.js'
import RoomDetailsRoutes from '../src/RoomDetails/roomDetails.routes.js'
import RoomViewRoutes from '../src/roomView/roomView.routes.js'
import { limiter } from '../middlewares/rate.limit.js'

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

const routes = (app) =>{
    app.use('/v1/hotelhavenis', authRoutes)
    app.use('/v1/hotelhavenis', userRoutes)
    app.use('/v1/hotelRoutes', HotelRoutes)
    app.use('/v1/roomRoutes', RoomRoutes)
    app.use('/v1/roomDetailsRoutes', RoomDetailsRoutes)
    app.use('/v1/roomViewRoutes', RoomViewRoutes)
}


export const initServer = ()=>{
    const app = express()
    try{
        configs(app)
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server running in port: ${process.env.PORT}`)
    }catch(err){
        console.error('Server init failed', err)
    }
}