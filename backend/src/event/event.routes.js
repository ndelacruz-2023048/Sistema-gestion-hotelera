import { Router } from 'express'
import { getAll, newEvent } from './event.controller.js'

const api = Router()

/** 
 * @swagger
 * components:
 *   schemas:
 *     Events:
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
 *   name: Events
 *   description: The events managment api
 */


/**
 * @swagger
 * /v1/hotelhavenis/hotels/new:
 *   get:
 *     summary: Retorna la lista de todos los hoteles
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: Lista de todos los hoteles
 *         content:
 *           application/json:  
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Events' 
 * 
 *   post:
 *     summary: Retorna la lista de todos los hoteles
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: Lista de todos los hoteles
 *         content:
 *           application/json:  
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Events' 
*/


api.post('/new', newEvent)
api.get('/list', getAll)

export default api