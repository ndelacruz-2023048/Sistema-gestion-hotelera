import { Router } from "express";
import { createReservation, getAllReservations } from "./reservation.controller.js";

const api = Router()

api.post('/createReservation', createReservation)
api.get('/getAllReservations', getAllReservations)

export default api