import { Router } from 'express'
import { 
    addNewRoom,
    getAllRoom,
    getRoomsByHotel
} from './room.controller.js'

const api = Router()

api.get(
    '/getAllRoom',
    getAllRoom
)

api.post(
    '/addNewRoom',
    addNewRoom
)

api.get(
    '/getRoomByHotel/:id',
    getRoomsByHotel
)

export default api