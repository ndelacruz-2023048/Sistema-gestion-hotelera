import { Router } from 'express'
const api = Router()
import { getTopUserByReservations } from '../User/user.controller.js'
import { getMostReservedRoom } from '../room/room.controller.js'

/**
 * @swagger
 * /v1/hotelhavenis/statistics/getStatisticsRooms:
 *   get:
 *     summary: Obtiene la habitación más reservada
 *     tags:
 *       - Estadísticas
 *     responses:
 *       200:
 *         description: Éxito al obtener la habitación más reservada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 mostReservedRoom:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "662ba5279a260c6495c0cbdd"
 *                     count:
 *                       type: number
 *                       example: 5
 *                     room:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         number:
 *                           type: string
 *                         type:
 *                           type: string
 *       500:
 *         description: Error al obtener la habitación más reservada
 */

/**
 * @swagger
 * /v1/hotelhavenis/statistics/getStatisticsUsers:
 *   get:
 *     summary: Obtiene el usuario con más reservas realizadas
 *     tags:
 *       - Estadísticas
 *     responses:
 *       200:
 *         description: Éxito al obtener el usuario con más reservas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 topUser:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "662ba5279a260c6495c0cbdd"
 *                     count:
 *                       type: number
 *                       example: 10
 *                     user:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                         email:
 *                           type: string
 *       500:
 *         description: Error al obtener el usuario con más reservas
 */


api.get( '/getStatisticsRooms', getMostReservedRoom)
api.get('/getStatisticsUsers', getTopUserByReservations)

export default api