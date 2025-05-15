import { Router } from 'express'
import { 
    addNewRoomV,
    getAllRoomView
} from './RoomView.controller.js'

const api = Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     RoomView:
 *       type: object
 *       required:
 *         - room
 *         - squareMeters
 *         - bedTypes
 *         - floor
 *         - images
 *         - available
 *         - pricePerNight
 *       properties:
 *         id:
 *           type: string
 *           description: El ID auto-generado del RoomView 
 *         room:
 *           $ref: '#/components/schemas/Room'
 *         squareMeters:
 *           type: number
 *           description: El tamaño del RoomView en metros cuadrados
 *         bedTypes:
 *           type: string
 *           description: El tipo de cama del RoomView
 *         floor: 
 *           type: number
 *           description: El piso del RoomView
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           description: Las imágenes del RoomView
 *         available:
 *           type: boolean
 *           description: La disponibilidad del RoomView
 *         pricePerNight:
 *           type: number
 *           description: El precio por noche del RoomView
 * 
 */

/** 
 * @swagger
 * tags:
 *   name: RoomView
 *   description: The roomView management API    
 */

/**
 * @swagger
 * /v1/hotelhavenis/room-view/getAllRoomView:
 *   get:
 *     summary: Retorna la lista de todos los RoomView
 *     tags: [RoomView]
 *     responses:
 *       200:
 *         description: Lista de todos los RoomView
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
 *                   example: "Lista de todos los RoomView"
 *       404:
 *         description: No se encontraron RoomView
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
 *                   example: "Rooms not found"
 */

/**
 * @swagger
 * /v1/hotelhavenis/room-view/addNewRoomV:
 *   post:
 *     summary: Agrega una nueva vista de habitación
 *     tags: [RoomView]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RoomView'
 * 
 *     responses:
 *       200:
 *         description: Vista agregada correctamente
 *         content:
 *           application/json:  
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: String
 *                   example: RoomView added successfully
 *       404:
 *         description: No se encontraron habitaciones
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
 *                   example: Rooms not added
 *  
 */

api.get(
    '/getAllRoomView',
    getAllRoomView
)

api.post(
    '/addNewRoomV',
    addNewRoomV
)

export default api