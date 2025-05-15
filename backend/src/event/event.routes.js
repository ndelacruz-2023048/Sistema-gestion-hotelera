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
 *         - description
 *         - startDate
 *         - endDate
 *         - location
 *         - organizer
 *         - designated
 *         - capacity
 *         - price
 *         - createdAt
 *       properties:
 *         id:
 *           type: string
 *           description: El ID auto-generado del evento
 *         name:
 *           type: string
 *           description: El nombre del evento
 *         description:
 *           type: string
 *           description: La descripción del evento
 *         startDate:
 *           type: date
 *           description: Fecha y hora de inicio del evento
 *         endDate:
 *           type: date
 *           description: Fecha y hora de finalización del evento 
 *         location:
 *           type: string   
 *           description:  Ubicación del salon del evento 
 *         organizer:
 *           type: string
 *           description: Organizador del evento
 *         designated: 
 *           type: Schema.Types.ObjectId
 *           description: Designado del evento 
 *         capacity:
 *           type: number
 *           description: Capacidad del evento
 *         price:
 *           type: number
 *           description: Precio del evento
 *         createdAt:
 *           type: date
 *           description: Fecha de cuando se hiso la reservación del evento
 * 
 */

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: The events managment api
 * 
 */

/**
 * @swagger
 * /v1/hotelhavenis/events/list:
 *   get:
 *     summary: Retorna la lista de todos los eventos
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: Lista de todos los eventos
 *         content:
 *           application/json:  
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Events' 
 *       404:
 *         description: No se encontraron eventos
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
 *                   example: Not event found
 *       400:
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
 *                   example: General error when list Events
*/

/**
 * @swagger
 * /v1/hotelhavenis/events/new:
 *   post:
 *     summary: Crea un nuevo evento
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: Crea un nuevo evento
 *         content:
 *           application/json:  
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Events'
 *       400:
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
 *                   example: General error when list Events
 *
*/

api.post('/new', newEvent)
api.get('/list', getAll)

export default api