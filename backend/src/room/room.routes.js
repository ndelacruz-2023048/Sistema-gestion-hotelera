import { Router } from 'express'
import { 
    addNewRoom,
    getAllRoom
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

export default api