import { Router } from 'express'
import { login, logout, register } from './auth.controller.js'
import { registerUser } from '../../middlewares/validators.js'

const api = Router()

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
 *   name: Auth
 *   description: API para la autenticación de usuarios
 */

/**
 * @swagger
 * /v1/hotelhavenis/auth/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario registrado exitosamente
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
 *                   example: Usuario registrado exitosamente
 *       400:
 *         description: Error en el registro del usuario
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
 *                   example: Error en el registro del usuario
 */

/**
 * @swagger
 * /v1/hotelhavenis/auth/login:
 *   post:
 *     summary: Inicia sesión un usuario
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: El nombre de usuario
 *               password:
 *                 type: string
 *                 description: La contraseña del usuario
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
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
 *                   example: Inicio de sesión exitoso
 *       401:
 *         description: Credenciales inválidas
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
 *                   example: Credenciales inválidas
 */

/**
 * @swagger
 * /v1/hotelhavenis/auth/logout:
 *   post:
 *     summary: Cierra sesión un usuario
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Cierre de sesión exitoso
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
 *                   example: Cierre de sesión exitoso
 */

api.post(
    '/register',
    [
        registerUser
    ],
    register
)
api.post('/login', login)
api.post('/logout', logout)

export default api