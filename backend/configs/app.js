`use strict`

import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cors from "cors"
import cookieParser from "cookie-parser"
import authRoutes from '../src/Auth/auth.routes.js'
import userRoutes from '../src/User/user.routes.js'

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
}

const routes = (app) =>{
    app.use('/v1/hotelhavenis', authRoutes)
    app.use('/v1/hotelhavenis', userRoutes)
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