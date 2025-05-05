import { Router } from 'express'
import { 
    addNewRoomV,
    getAllRoomView
} from './RoomView.controller.js'

const api = Router()

api.get(
    '/getAllRoomView',
    getAllRoomView
)

api.post(
    '/addNewRoomV',
    addNewRoomV
)

export default api