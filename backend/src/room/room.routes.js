import { Router } from 'express'
import { 
    addNewRoom,
    getAllRoom,
<<<<<<< HEAD
    getRoomsByHotel
=======
    updateRoom,
    deleteRoom
>>>>>>> hcordero-2023253
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
 *     summary: Retorna la lista de todos los cuartos (Accesible para todos los usuarios)
 *     tags: [Room]
 *     description: Este endpoint puede ser accedido por cualquier usuario autenticado, incluyendo administradores de plataforma, administradores de hotel y usuarios generales.
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
 *                   type: string
 *                   example: "Lista de cuartos obtenida con éxito"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Room'
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
 *                   example: "Rooms not found"
 */

/**
 * @swagger
 * /v1/hotelhavenis/rooms/addNewRoom:
 *   post:
 *     summary: Agrega una nueva habitación (Solo para administradores de plataforma y administradores de hotel)
 *     tags: [Room]
 *     description: Este endpoint solo puede ser accedido por administradores de plataforma y administradores de hotel.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Suite Deluxe"
 *               floor:
 *                 type: number
 *                 example: 5
 *               bedTypes:
 *                 type: string
 *                 example: "King Size"
 *               pricePerNight:
 *                 type: number
 *                 example: 150
 *               available:
 *                 type: boolean
 *                 example: true
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
 *                   type: string
 *                   example: "Room added successfully"
 *       400:
 *         description: Error en la solicitud
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
 *                   example: "Invalid room data"
 */

/**
 * @swagger
 * /v1/hotelhavenis/rooms/updateRoom/{id}:
 *   put:
 *     summary: Actualiza los detalles de un room (Solo para administradores de plataforma y administradores de hotel)
 *     tags: [Room]
 *     description: Este endpoint solo puede ser accedido por administradores de plataforma y administradores de hotel.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del room a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Suite Deluxe Actualizada"
 *               pricePerNight:
 *                 type: number
 *                 example: 180
 *               available:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       200:
 *         description: Room actualizado exitosamente
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
 *                   example: "Room updated successfully"
 *       400:
 *         description: Error en la solicitud
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
 *                   example: "Invalid room data"
 *       404:
 *         description: Room no encontrado
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
 *                   example: "Room not found"
 */

/**
 * @swagger
 * /v1/hotelhavenis/rooms/deleteRoom/{id}:
 *   delete:
 *     summary: Elimina los datos de un room (Solo para administradores de plataforma y administradores de hotel)
 *     tags: [Room]
 *     description: Este endpoint solo puede ser accedido por administradores de plataforma y administradores de hotel.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del room a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Room eliminado exitosamente
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
 *                   example: "Room deleted successfully"
 *       400:
 *         description: Error en la solicitud
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
 *                   example: "Invalid room data"
 *       404:
 *         description: Room no encontrado
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
 *                   example: "Room not found"
 */
api.get(
    '/getAllRoom',
    getAllRoom
)

api.post(
    '/addNewRoom',
    addNewRoom
)

<<<<<<< HEAD
api.get(
    '/getRoomByHotel/:id',
    getRoomsByHotel
=======
api.put(
    '/updateRoom/:id',
    updateRoom
)

api.delete(
    '/deleteRoom/:id',
    deleteRoom
>>>>>>> hcordero-2023253
)

export default api