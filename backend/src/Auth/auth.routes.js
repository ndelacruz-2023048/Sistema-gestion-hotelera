import { Router } from 'express'
import { login } from './auth.controller.js'

const api = Router()

api.post('/login', login)

export default api