import { Router } from 'express';
import hotelRoutes from '../hotel/hotel.routes.js';
import roomRoutes from '../room/room.routes.js';
import authRoutes from './auth.routes.js';
import roomViewRoutes from '../roomView/roomView.routes.js';
import roomDetailsRoutes from '../RoomDetails/roomDetails.routes.js';
import user from '../User/user.routes.js'
import eventRoutes from '../event/event.routes.js';
import Reservations from '../reservation/reservation.routes.js';

const adminHotel = Router()

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
 *         - user
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
 *         user:
 *           $ref: '#/components/schemas/User'                        
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
 *   name: AdministradorPlataformaHotel
 *   description: He hotel management API for platform admins
 */


/**
 * @swagger
 * /v1/hotelhavenis/adminHotel/hotels/getHotels:
 *   get:
 *     summary: Retorna la lista de todos los hoteles (Accesible para todos los usuarios)
 *     tags: [AdministradorPlataformaHotel]
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
 * /v1/hotelhavenis/adminHotel/hotels/addHotels:
 *   post:
 *     summary: Agrega un nuevo hotel (Solo para administradores)
 *     tags: [AdministradorPlataformaHotel]
 *     description: Este endpoint solo puede ser accedido por administradores de plataforma.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Hotel Nery"
 *               address:
 *                 type: string
 *                 example: "Calle 123, Ciudad"
 *               category:
 *                 type: string
 *                 example: "5 estrellas"
 *               price:
 *                 type: number
 *                 example: 150.00
 *               image:
 *                 type: string
 *                 example: "https://example.com/image.jpg"
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
 *                   example: "Hotel created successfully"
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
 *                   example: "Invalid hotel data"
 */

/**
 * @swagger
 * /v1/hotelhavenis/adminHotel/hotels/updateHotel/{id}:
 *   put:
 *     summary: Actualiza los detalles de un hotel (Solo para administradores)
 *     tags: [AdministradorPlataformaHotel]
 *     description: Este endpoint solo puede ser accedido por administradores de plataforma.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del hotel a actualizar
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
 *                 example: "Hotel Nery Actualizado"
 *               address:
 *                 type: string
 *                 example: "Calle 123, Ciudad"
 *               category:
 *                 type: string
 *                 example: "4 estrellas"
 *               price:
 *                 type: number
 *                 example: 150.00
 *               image:
 *                 type: string
 *                 example: "https://example.com/image.jpg"
 *     responses:
 *       200:
 *         description: Hotel actualizado exitosamente
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
 *                   example: "Hotel updated successfully"
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
 *                   example: "Invalid hotel data"
 *       404:
 *         description: Hotel no encontrado
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
 *                   example: "Hotel not found"
 */

/**
 * @swagger
 * /v1/hotelhavenis/adminHotel/hotels/deleteHotel/{id}:
 *   delete:
 *     summary: Elimina un hotel (Solo para administradores)
 *     tags: [AdministradorPlataformaHotel]
 *     description: Este endpoint solo puede ser accedido por administradores de plataforma.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del hotel a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Hotel eliminado exitosamente
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
 *                   example: "Hotel deleted successfully"
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
 *                   example: "Invalid hotel data"
 *       404:
 *         description: Hotel no encontrado
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
 *                   example: "Hotel not found"
 */

/*ADMIN CON ACCESO A LOS CUARTOS*/

/**
 * @swagger
 * /v1/hotelhavenis/adminHotel/rooms/getAllRoom:
 *   get:
 *     summary: Retorna la lista de todos los cuartos (Accesible para todos los usuarios)
 *     tags: [AdministradorPlataformaHotel]
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
 * /v1/hotelhavenis/adminHotel/rooms/addNewRoom:
 *   post:
 *     summary: Agrega una nueva habitación (Solo para administradores de plataforma y administradores de hotel)
 *     tags: [AdministradorPlataformaHotel]
 *     description: Este endpoint solo puede ser accedido por administradores de plataforma y administradores de hotel.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Room'
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
 * /v1/hotelhavenis/adminHotel/rooms/updateRoom/{id}:
 *   put:
 *     summary: Actualiza los detalles de un room (Solo para administradores de plataforma y administradores de hotel)
 *     tags: [AdministradorPlataformaHotel]
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
 *             $ref: '#/components/schemas/Room'
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
 * /v1/hotelhavenis/adminHotel/rooms/deleteRoom/{id}:
 *   delete:
 *     summary: Elimina los datos de un room (Solo para administradores de plataforma y administradores de hotel)
 *     tags: [AdministradorPlataformaHotel]
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

/*ADMIN CON ACCESO A LOGIN Y REGISTER */

/**
 * @swagger
 * /v1/hotelhavenis/adminHotel/auth/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     tags: [AdministradorPlataformaHotel]
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
 * /v1/hotelhavenis/adminHotel/auth/login:
 *   post:
 *     summary: Inicia sesión un usuario
 *     tags: [AdministradorPlataformaHotel]
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
 * /v1/hotelhavenis/adminHotel/auth/logout:
 *   post:
 *     summary: Cierra sesión un usuario
 *     tags: [AdministradorPlataformaHotel]
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

/*ADMIN CON ACCESO A ROOM VIEW */

/**
 * @swagger
 * /v1/hotelhavenis/adminHotel/room-view/getAllRoomView:
 *   get:
 *     summary: Retorna la lista de todos los RoomView
 *     tags: [AdministradorPlataformaHotel]
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
 * /v1/hotelhavenis/adminHotel/room-view/addNewRoomV:
 *   post:
 *     summary: Agrega una nueva vista de habitación
 *     tags: [AdministradorPlataformaHotel]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RoomView'
 * 
 *     responses:
 *       200:
 *         description: Vista agregada correctamente
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
 *                   example: RoomView added successfully
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

/**
 * @swagger
 * /v1/hotelhavenis/adminHotel/room-view/{id}:
 *   put:
 *     summary: Actualiza un RoomView por su ID
 *     tags: [AdministradorPlataformaHotel]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del RoomView a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RoomView'
 *     responses:
 *       200:
 *         description: RoomView actualizado exitosamente
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
 *                   example: Room updated successfully
 *                 room:
 *                   $ref: '#/components/schemas/RoomView'
 *       404:
 *         description: RoomView no encontrado
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
 *                   example: Room not found
 *       500:
 *         description: Error general
 */

/**
 * @swagger
 * /v1/hotelhavenis/adminHotel/room-view/{id}:
 *   delete:
 *     summary: Elimina un RoomView por su ID
 *     tags: [AdministradorPlataformaHotel]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del RoomView a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: RoomView eliminado correctamente
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
 *                   example: Room deleted successfully
 *       404:
 *         description: RoomView no encontrado
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
 *                   example: Room not found
 *       500:
 *         description: Error general
 */

/*ADMIN CON ACCESI A ROOM DETAILS */

/**
 * @swagger
 * /v1/hotelhavenis/adminHotel/room-details/getRooms:
 *   get:
 *     summary: Retorna la lista de todos los detalles de las habitaciones
 *     tags: [AdministradorPlataformaHotel]
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
 * /v1/hotelhavenis/adminHotel/room-details/addRooms:
 *   post:
 *     summary: Crea un nuevo detalle de habitación
 *     tags: [AdministradorPlataformaHotel]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/roomDetails'
 *     responses:
 *       200:
 *         description: Agrega un nuevo detalle de habitación
 *         content:
 *           application/json:  
 *             schema:
 *               $ref: '#/components/schemas/roomDetails'
 *       500:
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
 *                   example: Error al crear el detalle de habitación
 */

/**
 * @swagger
 * /v1/hotelhavenis/adminHotel/room-details/updateRoom/{id}:
 *   put:
 *     summary: Actualiza un detalle de habitación existente
 *     tags: [AdministradorPlataformaHotel]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del detalle de habitación a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/roomDetails'
 *     responses:
 *       200:
 *         description: Detalle de habitación actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/roomDetails'
 *       404:
 *         description: Detalle de habitación no encontrado
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
 *                   example: Room detail not found
 *       500:
 *         description: Error general al actualizar
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
 * /v1/hotelhavenis/adminHotel/room-details/deleteRoom/{id}:
 *   delete:
 *     summary: Elimina un detalle de habitación por ID
 *     tags: [AdministradorPlataformaHotel]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del detalle de habitación a eliminar
 *     responses:
 *       200:
 *         description: Detalle de habitación eliminado correctamente
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
 *                   example: Room detail deleted successfully
 *       404:
 *         description: Detalle de habitación no encontrado
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
 *                   example: Room detail not found
 *       500:
 *         description: Error general al eliminar
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

/*ADMIN CON ACCESO A EVENT */
/**
 * @swagger
 * /v1/hotelhavenis/adminHotel/events/list:
 *   get:
 *     summary: Retorna la lista de todos los eventos
 *     tags: [AdministradorPlataformaHotel]
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
 * /v1/hotelhavenis/adminHotel/events/new:
 *   post:
 *     summary: Crea un nuevo evento
 *     tags: [AdministradorPlataformaHotel]
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

/*ADMIN CON ACCESO A RESERVATION */

/**
 * @swagger
 * /v1/hotelhavenis/adminHotel/reservation/getAllReservations:
 *   get:
 *     summary: Get all reservations
 *     tags: [AdministradorPlataformaHotel]
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
 * /v1/hotelhavenis/adminHotel/reservation/createReservation:
 *   post:
 *     summary: Post all reservations
 *     tags: [AdministradorPlataformaHotel]
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


adminHotel.use('/hotels', hotelRoutes);
adminHotel.use('/rooms', roomRoutes);
adminHotel.use('/auth', authRoutes);
adminHotel.use('/events', eventRoutes);
adminHotel.use('/users', user);
adminHotel.use('/reservation', Reservations);
adminHotel.use('/roomDetails', roomDetailsRoutes);
adminHotel.use('/roomView', roomViewRoutes);

export default adminHotel;