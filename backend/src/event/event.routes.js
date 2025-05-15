import { Router } from 'express'
import { getAll, newEvent } from './event.controller.js'

const api = Router()



api.post('/new', newEvent)
api.get('/list', getAll)

export default api