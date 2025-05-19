import { Router } from 'express';
import hotelRoutes from '../hotel/hotel.routes.js';
import roomRoutes from '../room/room.routes.js';
import authRoutes from './auth.routes.js';
import roomViewRoutes from '../roomView/roomView.routes.js';
import roomDetailsRoutes from '../RoomDetails/roomDetails.routes.js';
import eventRoutes from '../event/event.routes.js';
import Reservations from '../reservation/reservation.routes.js';

const client = Router();

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
 */

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
 * components:
 *   schemas:
 *     client:
 *       type: object
 *       required:
 *         - name
 *         - surname
 *         - address
 *         - mobilePhone
 *         - country
 *         - clientname
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
 *         clientname:
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
 * components:
 *   schemas:
 *     roomDetails:
 *       type: object
 *       required:
 *         - room
 *         - roomNumber
 *         - furniture
 *         - tecnologie
 *         - bathroom
 *         - wifi
 *         - food
 *       properties:
 *         id:
 *           type: string
 *           description: El ID auto-generado del evento
 *         room:
 *           type: Schema.Types.ObjectId
 *           description: Id del tipo de habitación de la cual depende
 *         roomNumber:
 *           type: number
 *           description: Numero de la habitación
 *         furniture:
 *           type: string
 *           description: Lista de muebles de la habitación 
 *         tecnologie:
 *           type: string
 *           description: Lista de electrodomesticos de la habitación
 *         bathroom:
 *           type: string
 *           description: Lista de los servicios sanitarios 
 *         wifi:
 *           type: string   
 *           description: Tipo de red de wifi
 *         food:
 *           type: string
 *           description: Tipo de servicio
 */

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
 * components:
 *   schemas:
 *     Reservation:
 *       type: object
 *       required:
 *         - client
 *         - room
 *         - event
 *         - reservationDate
 *         - status
 *         - startDate
 *         - endDate
 *       properties:
 *         id:
 *           type: string
 *           description: El ID auto-generado
 *         client:
 *           $ref: '#/components/schemas/client'                        
 *         room:
 *           $ref: '#/components/schemas/Room'           
 *         event:
 *           $ref: '#/components/schemas/Event'
 *         reservationDate:
 *           type: string
 *           format: date
 *           description: Fecha de reserva
 *         status:
 *           type: string
 *           description: Estado de la reserva
 *         startDate:      
 *           type: string
 *           format: date
 *           description: Fecha de inicio de la reserva
 *         endDate:
 *           type: string
 *           format: date
 *           description: Fecha de fin de la reserva
 * 
 */  

/**
 * @swagger
 * tags:
 *   name: Cliente Del Hotel
 *   description: He hotel management API for platform client
 */

/*ADMIN CON ACCESO A HOTELES */
/**
 * @swagger
 * /v1/hotelhavenis/client/hotels/getHotels:
 *   get:
 *     summary: Retorna la lista de todos los hoteles (Accesible para todos los usuarios)
 *     tags: [Cliente Del Hotel]
 *     description: Este endpoint puede ser accedido por cualquier usuario autenticado, incluyendo administradores de plataforma, administradores de hotel y usuarios generales.
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
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Hotel'
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
 *                   example: "Hotels not found"
 */

/**
 * @swagger
 * /v1/hotelhavenis/client/rooms/getAllRoom:
 *   get:
 *     summary: Retorna la lista de todos los cuartos (Accesible para todos los usuarios)
 *     tags: [Cliente Del Hotel]
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
 * /v1/hotelhavenis/client/auth/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     tags: [Cliente Del Hotel]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/client'
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
 * /v1/hotelhavenis/client/auth/login:
 *   post:
 *     summary: Inicia sesión un usuario
 *     tags: [Cliente Del Hotel]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clientname:
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
 * /v1/hotelhavenis/client/auth/logout:
 *   post:
 *     summary: Cierra sesión un usuario
 *     tags: [Cliente Del Hotel]
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

/**
 * @swagger
 * /v1/hotelhavenis/client/room-view/getAllRoomView:
 *   get:
 *     summary: Retorna la lista de todos los RoomView
 *     tags: [Cliente Del Hotel]
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
 * /v1/hotelhavenis/client/room-details/getRooms:
 *   get:
 *     summary: Retorna la lista de todos los detalles de las habitaciones
 *     tags: [Cliente Del Hotel]
 *     responses:
 *       200:
 *         description: Lista de todos los detalles de las habitaciones
 *         content:
 *           application/json:  
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/roomDetails' 
 *       404:
 *         description: No se encuentran habitaciones
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
 *       500:
 *         description: General error del api
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
 *                   example: General error
*/

/**
 * @swagger
 * /v1/hotelhavenis/client/events/list:
 *   get:
 *     summary: Retorna la lista de todos los eventos
 *     tags: [Cliente Del Hotel]
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
 * /v1/hotelhavenis/client/events/new:
 *   post:
 *     summary: Crea un nuevo evento
 *     tags: [Cliente Del Hotel]
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


/**
 * @swagger
 * /v1/hotelhavenis/client/reservation/getAllReservations:
 *   get:
 *     summary: Get all reservations
 *     tags: [Cliente Del Hotel]
 *     description: Get all reservations
 *     responses:
 *       200:
 *         description: Reservations retrieved successfully
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
 *                   example: "List of all reservations"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Reservation'
 *       400:
 *         description: Bad request
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
 *                   example: "Reservation not found"
 */

/**
 * @swagger
 * /v1/hotelhavenis/client/reservation/createReservation:
 *   post:
 *     summary: Post all reservations
 *     tags: [Cliente Del Hotel]
 *     responses:
 *       200:
 *         description: Reservations retrieved successfully
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
 *                   example: "List of all reservations"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Reservation'
 *       400:
 *         description: Bad request
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
 *                   example: "Reservation not found"
 */


client.use('/hotels', hotelRoutes);
client.use('/rooms', roomRoutes);
client.use('/auth', authRoutes);
client.use('/events', eventRoutes);
client.use('/clients', client);
client.use('/reservation', Reservations);
client.use('/roomDetails', roomDetailsRoutes);
client.use('/roomView', roomViewRoutes);

export default client;