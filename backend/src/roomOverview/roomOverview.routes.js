import { Router } from 'express'
import { 
    addNewRoomO,
    getAllRoomOverView
} from './RoomOverview.controller.js'

const api = Router()

api.get(
    '/getAllRoomO',
    getAllRoomOverView
)

api.post(
    '/addNewRoomOs',
    addNewRoomO
)

export default api