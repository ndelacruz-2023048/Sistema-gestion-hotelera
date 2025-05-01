import { Router } from 'express'
import { login, logout } from './auth.controller.js'

const api = Router()

api.post('/login', login)
api.post('/logout', logout)

export default api