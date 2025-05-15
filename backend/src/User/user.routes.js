import { Router } from 'express';
import { getAll } from './user.controller.js';

const api = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - surname
 *         - address
 *         - mobilePhone
 *         - country
 *         - username
 *         - email
 *         - password
 *         - role
 *       properties:
 *         id:
 *           type: string
 *           description: El ID auto-generado del usuario
 *         name:
 *           type: string
 *           description: El nombre del usuario
 *         surname:
 *           type: string
 *           description: El apellido del usuario
 *         address:
 *           type: string
 *           description: La dirección del usuario
 *         mobilePhone:
 *           type: string
 *           description: El número de teléfono móvil del usuario
 *         country:
 *           type: string
 *           description: El país del usuario
 *         username:
 *           type: string
 *           description: El nombre de usuario único
 *         email:
 *           type: string
 *           description: El correo electrónico único del usuario
 *         password:
 *           type: string
 *           description: La contraseña del usuario
 *         profilePicture:
 *           type: string
 *           description: La foto de perfil del usuario
 *         role:
 *           type: string
 *           description: El rol del usuario (ADMIN, CLIENT, EMPLOYEE)
 *         birthDate:
 *           type: string
 *           format: date
 *           description: La fecha de nacimiento del usuario (requerido para empleados)
 *         identificationNumber:
 *           type: string
 *           description: El número de identificación del usuario (requerido para empleados)
 *         paymentInfo:
 *           type: string
 *           description: La información de pago del usuario
 *         roomPreferences:
 *           type: string
 *           description: Las preferencias de habitación del usuario
 *         reservationHistory:
 *           type: array
 *           items:
 *             type: string
 *           description: El historial de reservas del usuario
 *         jobPosition:
 *           type: string
 *           description: La posición laboral del usuario (requerido para empleados)
 *         hireDate:
 *           type: string
 *           format: date
 *           description: La fecha de contratación del usuario (requerido para empleados)
 *         permissions:
 *           type: array
 *           items:
 *             type: string
 *           description: Los permisos del usuario (requerido para administradores y empleados)
 *
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: API para la gestión de usuarios
 */

/**
 * @swagger
 * /v1/user/list:
 *   get:
 *     summary: Obtiene la lista de todos los usuarios
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente
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
 *                   example: Lista de usuarios obtenida exitosamente
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *       404:
 *         description: No se encontraron usuarios
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
 *                   example: No se encontraron usuarios
 */

api.get('/list', getAll);

export default api;