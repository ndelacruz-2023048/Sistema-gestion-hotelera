import { Router } from 'express'
import { 
    addNewHotel,
    getAllHotels,
    updateHotel,
    deleteHotel
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
 *     Administrador de plataforma:
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
 *   name: Administrador de plataforma
 *   description: The hotel managment api
 */


/**
 * @swagger
 * /v1/hotelhavenis/hotels/getHotels:
 *   get:
 *     summary: Retorna la lista de todos los hoteles (Accesible para todos los usuarios)
 *     tags: [Administrador de plataforma]
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
 * /v1/hotelhavenis/hotels/addHotels:
 *   post:
 *     summary: Agrega un nuevo hotel (Solo para administradores)
 *     tags: [Administrador de plataforma]
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
 * /v1/hotelhavenis/hotels/updateHotel/{id}:
 *   put:
 *     summary: Actualiza los detalles de un hotel (Solo para administradores)
 *     tags: [Administrador de plataforma]
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
 * /v1/hotelhavenis/hotels/deleteHotel/{id}:
 *   delete:
 *     summary: Elimina un hotel (Solo para administradores)
 *     tags: [Administrador de plataforma]
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
 *     summary: Retorna la lista de todos los hoteles (Accesible para todos los usuarios)
 *     tags: [Hotel]
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
 * /v1/hotelhavenis/hotels/addHotels:
 *   post:
 *     summary: Agrega un nuevo hotel (Solo para administradores)
 *     tags: [Hotel]
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
 * /v1/hotelhavenis/hotels/updateHotel/{id}:
 *   put:
 *     summary: Actualiza los detalles de un hotel (Solo para administradores)
 *     tags: [Hotel]
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
 * /v1/hotelhavenis/hotels/deleteHotel/{id}:
 *   delete:
 *     summary: Elimina un hotel (Solo para administradores)
 *     tags: [Hotel]
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

api.delete(
    '/deleteHotel/:id',
    deleteHotel
)

export default api