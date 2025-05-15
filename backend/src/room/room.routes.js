import { Router } from 'express'
import { 
    addNewRoom,
    getAllRoom
} from './room.controller.js'

const api = Router()

/** 
 * @swagger
 * components:
 *   schemas:
 *     Room:
 *       type: object
 *       required:
 *         - hotel
 *         - nameOfTheRoom
 *         - typeRoom
 *         - capacity
 *         - squareMeters
 *         - description
 *         - disponibility
 *       properties:
 *         id:
 *           type: string
 *           description: El ID auto-generado del Room
 *         hotel:
 *           $ref: '#/components/schemas/Hotel'
 *         nameOfTheRoom:
 *           type: string
 *           description: La dirección del Room
 *         typeRoom:
 *           type: string
 *           description: La categoría del Room
 *         capacity:
 *           type: object
 *           required:
 *             - adults
 *             - childrens
 *           properties:
 *             adults:
 *               type: integer
 *               description: El número de adultos
 *             childrens:
 *               type: integer
 *               description: El número de niños
 *         squareMeters:
 *           type: number   
 *           description: La imagen del Room
 *         description:
 *           type: string
 *           description: La descripción del Room
 *         disponibility:
 *           type: object
 *           required:
 *             - fechas_ocupadas
 *             - fechas_disponibles
 *           properties:
 *             fechas_ocupadas:
 *               type: array
 *               items:
 *                 type: string
 *                 format: date
 *               description: Fechas ya ocupadas
 *             fechas_disponibles:
 *               type: array
 *               items:
 *                 type: string
 *                 format: date
 *               description: Fechas disponibles  
 */

/**
 * @swagger
 * tags:
 *   name: Room
 *   description: The Room managment api
 */

/**
 * @swagger
 * /v1/hotelhavenis/rooms/getAllRoom:
 *   get:
 *     summary: Retorna la lista de todos los cuartos
 *     tags: [Room]
 *     responses:
 *       200:
 *         description: Lista de todos los cuartos
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
 *                   example: 'Lista de cuartos obtenida con éxito'
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
 *                   example: Rooms not found
 *  
 */

/**
 * @swagger
 * /v1/hotelhavenis/rooms/addNewRoom:
 *   post:
 *     summary: Agrega una nueva habitación
 *     tags: [Room]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Room'
 * 
 *     responses:
 *       200:
 *         description: Habitación agregada correctamente
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
 *                   example: Room added successfully
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
    '/getAllRoom',
    getAllRoom
)

api.post(
    '/addNewRoom',
    addNewRoom
)

export default api