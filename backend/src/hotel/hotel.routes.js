import { Router } from 'express'
import { 
    addNewHotel,
    getAllHotels
} from './hotel.controller.js'

const api = Router()

api.get(
    '/getHotels',
    getAllHotels
)

api.post(
    '/addHotels',
    addNewHotel
)

export default api