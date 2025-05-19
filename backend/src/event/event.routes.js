import { Router } from 'express'
import { getAll, newEvent, updateEvent } from './event.controller.js'

const api = Router()

api.post('/new', newEvent)
api.get('/list', getAll)
api.put('/updated/:id', updateEvent)

export default api