import { Router } from 'express'
import { 
    addNewHotel,
    getAllHotels,
    updateHotel
} from './hotel.controller.js'

/** 
 * @swagger
 * components:
 *   schemas:
 *     Hotel:
 *       type: object
 *       required:
 *         - name
 *         - address
 *         - category
 *         - price
 *         - image
 *       properties:
 *         id:
 *           type: string
 *           description: El ID auto-generado del hotel
 *         name:
 *           type: string
 *           description: El nombre del hotel
 *         address:
 *           type: string
 *           description: La dirección del hotel
 *         category:
 *           type: string
 *           description: La categoría del hotel
 *         price:
 *           type: number
 *           description: El precio por noche
 *         image:
 *           type: string   
 *           description: La imagen del hotel
 *         
 */

/**
 * @swagger
 * tags:
 *   name: Hotel
 *   description: The hotel managment api
 */


/**
 * @swagger
 * /v1/hotelhavenis/hotels/getHotels:
 *   get:
 *     summary: Retorna la lista de todos los hoteles
 *     tags: [Hotel]
 *     responses:
 *       200:
 *         description: Lista de todos los hoteles
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
 *                   example: "Lista de todos los hoteles"
 *         links:
 *              GetUserById:
 *                operationId: getUser
 *                parameters:
 *                  id: '$response.body#/id'
 *       404:
 *         description: No se encontraron hoteles
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
 *                   example: Hotels not found
 *       
*/

/**
 * @swagger
 * /v1/hotelhavenis/hotels/addHotels:
 *   post:
 *     summary: Agrega un nuevo hotel
 *     tags: [Hotel]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Hotel'
 *     responses:
 *       200:
 *         description: Hotel creado exitosamente
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
 *                   example: Hotel created successfully
 */

/**
 * @swagger
 * 
 */


const api = Router()

api.get(
    '/getHotels',
    getAllHotels
)

api.post(
    '/addHotels',
    addNewHotel    
)

api.put(
    '/updateHotel/:id',
    updateHotel
)

export default api