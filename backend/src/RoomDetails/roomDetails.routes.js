import { Router } from 'express'
import { 
    addNewRoom,
    getAllRooms
} from './roomDetails.controller.js'

const api = Router()

api.get(
    '/getRooms',
    getAllRooms
)

api.post(
    '/addRooms',
    addNewRoom
)

export default api