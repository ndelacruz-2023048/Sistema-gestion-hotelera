import { Router } from 'express'
import { 
    addNewRoom,
    getAllRooms
} from './roomDetails.controller.js'

const api = Router()

/** 
 * @swagger
 * components:
 *   schemas:
 *     roomDetails:
 *       type: object
 *       required:
 *         - room
 *         - roomNumber
 *         - furniture
 *         - tecnologie
 *         - bathroom
 *         - wifi
 *         - food
 *       properties:
 *         id:
 *           type: string
 *           description: El ID auto-generado del evento
 *         room:
 *           type: Schema.Types.ObjectId
 *           description: Id del tipo de habitación de la cual depende
 *         roomNumber:
 *           type: number
 *           description: Numero de la habitación
 *         furniture:
 *           type: string
 *           description: Lista de muebles de la habitación 
 *         tecnologie:
 *           type: string
 *           description: Lista de electrodomesticos de la habitación
 *         bathroom:
 *           type: string
 *           description: Lista de los servicios sanitarios 
 *         wifi:
 *           type: string   
 *           description: Tipo de red de wifi
 *         food:
 *           type: string
 *           description: Tipo de servicio
 */

/**
 * @swagger
 * tags:
 *   name: roomDetails
 *   description: The Room Details managment api
 */ 

/**
 * @swagger
 * /v1/hotelhavenis/room-details/getRooms:
 *   get:
 *     summary: Retorna la lista de todos los detalles de las habitaciones
 *     tags: [roomDetails]
 *     responses:
 *       200:
 *         description: Lista de todos los detalles de las habitaciones
 *         content:
 *           application/json:  
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/roomDetails' 
 *       404:
 *         description: No se encuentran habitaciones
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
 *                   example: Rooms not found
 *       500:
 *         description: General error del api
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
 *                   example: General error
*/

/**
 * @swagger
 * /v1/hotelhavenis/room-details/addRooms:
 *   post:
 *     summary: Crea un nuevo detalle de habitación
 *     tags: [roomDetails]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/roomDetails'
 *     responses:
 *       200:
 *         description: Agrega un nuevo detalle de habitación
 *         content:
 *           application/json:  
 *             schema:
 *               $ref: '#/components/schemas/roomDetails'
 *       500:
 *         description: Error general
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
 *                   example: Error al crear el detalle de habitación
 */

api.get(
    '/getRooms',
    getAllRooms
)

api.post(
    '/addRooms',
    addNewRoom
)

export default api