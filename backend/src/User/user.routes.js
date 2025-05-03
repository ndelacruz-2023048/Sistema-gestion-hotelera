import { Router } from 'express'
import { getAll } from './user.controller.js'

const api = Router()

api.get(
    '/listUsers',
    getAll
)

export default api