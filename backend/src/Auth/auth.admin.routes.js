import { Router } from 'express';
import hotelRoutes from '../hotel/hotel.routes.js';
import roomRoutes from '../room/room.routes.js';
import authRoutes from './auth.routes.js';

const adminApi = Router();

/** 
 * @swagger
 * components:
 *   schemas:
 *     Admin:
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
 *   - name: Administrador de plataforma
 *     description: Operaciones generales para administradores de plataforma
 *   - name: Administrador de plataforma:Hoteles
 *     description: Operaciones relacionadas con la gestión de hoteles
 *   - name: Administrador de plataforma:Habitaciones
 *     description: Operaciones relacionadas con la gestión de habitaciones
 */


adminApi.use('/hotels', hotelRoutes);
adminApi.use('/rooms', roomRoutes);
adminApi.use('/auth', authRoutes);

export default adminApi;