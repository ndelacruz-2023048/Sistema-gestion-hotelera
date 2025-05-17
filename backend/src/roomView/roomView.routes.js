import { Router } from 'express'
import { 
    addNewRoomV,
    getAllRoomView,
    updateRoomView,
    deleteRoomView
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

/**
 * @swagger
 * /v1/hotelhavenis/room-view/{id}:
 *   put:
 *     summary: Actualiza un RoomView por su ID
 *     tags: [RoomView]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del RoomView a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RoomView'
 *     responses:
 *       200:
 *         description: RoomView actualizado exitosamente
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
 *                   example: Room updated successfully
 *                 room:
 *                   $ref: '#/components/schemas/RoomView'
 *       404:
 *         description: RoomView no encontrado
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
 *                   example: Room not found
 *       500:
 *         description: Error general
 */

/**
 * @swagger
 * /v1/hotelhavenis/room-view/{id}:
 *   delete:
 *     summary: Elimina un RoomView por su ID
 *     tags: [RoomView]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del RoomView a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: RoomView eliminado correctamente
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
 *                   example: Room deleted successfully
 *       404:
 *         description: RoomView no encontrado
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
 *                   example: Room not found
 *       500:
 *         description: Error general
 */


api.get(
    '/getAllRoomView',
    getAllRoomView
)

api.post(
    '/addNewRoomV',
    addNewRoomV
)

api.get('/getRoomViewByRoom/:room', getAllRoomView)
api.put('/:id', updateRoomView)

api.delete('/:id', deleteRoomView)

export default api