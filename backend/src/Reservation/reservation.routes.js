import { Router } from "express";
import { createReservation, getAllReservations } from "./reservation.controller.js";

const api = Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Reservation:
 *       type: object
 *       required:
 *         - user
 *         - room
 *         - event
 *         - reservationDate
 *         - status
 *         - startDate
 *         - endDate
 *       properties:
 *         id:
 *           type: string
 *           description: El ID auto-generado
 *         user:
 *           $ref: '#/components/schemas/User'                        
 *         room:
 *           $ref: '#/components/schemas/Room'           
 *         event:
 *           $ref: '#/components/schemas/Events'
 *         reservationDate:
 *           type: string
 *           format: date
 *           description: Fecha de reserva
 *         status:
 *           type: string
 *           description: Estado de la reserva
 *         startDate:      
 *           type: string
 *           format: date
 *           description: Fecha de inicio de la reserva
 *         endDate:
 *           type: string
 *           format: date
 *           description: Fecha de fin de la reserva
 * 
 */  

/**
 * @swagger
 * tags:
 *   name: Reservations
 *   description: Reservations API
 */

/**
 * @swagger
 * /v1/hotelhavenis/reservation/getAllReservations:
 *   get:
 *     summary: Get all reservations
 *     tags: [Reservations]
 *     description: Get all reservations
 *     responses:
 *       200:
 *         description: Reservations retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "List of all reservations"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Reservation'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Reservation not found"
 */

/**
 * @swagger
 * /v1/hotelhavenis/reservation/createReservation:
 *   post:
 *     summary: Post all reservations
 *     tags: [Reservations]
 *     responses:
 *       200:
 *         description: Reservations retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "List of all reservations"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Reservation'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "Reservation not found"
 */


api.post('/createReservation', createReservation)
api.get('/getAllReservations', getAllReservations)

export default api