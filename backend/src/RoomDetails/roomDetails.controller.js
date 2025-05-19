import RoomDetails from '../RoomDetails/roomDetails.model.js'

export const getAllRooms = async(req, res) => {
    try {
        const room = await RoomDetails.find()

        if(room.length === 0){
            return res.status(404).send(
                {
                    success: false,
                    message: 'Rooms not found'
                }
            )
        }
        return res.status(200).send(
            {
                success: true,
                message: 'Rooms found:', 
                room
            }   
        )
    } catch (e) {
        console.error(e);
        return res.status(500).send(
            {
                success: false,
                message: 'General error'
            }
        )
    }
}

export const addNewRoom = async(req, res) => {
    try {
        let data = req.body
        let room = new RoomDetails(data)
        await room.save()
        return res.status(200).send(
            {
                success: true,
                message: `Room created successfully`,
                room
            }
        )
    } catch (e) {
        console.error(e);
        return res.status(500).send(
            {
                success: false,
                message: 'General error'
            }
        )
    }
}


export const updateRoomDetails = async (req, res) => {
    try {
        const {id} = req.params
        const updatedData = req.body

        const updatedRoom = await RoomDetails.findByIdAndUpdate(id, updatedData, {
            new: true,
            runValidators: true
        })

        if (!updatedRoom) {
            return res.status(404).send({
                success: false,
                message: 'Room detail not found'
            })
        }

        return res.status(200).send({
            success: true,
            message: 'Room detail updated successfully',
            room: updatedRoom
        })
    } catch (e) {
        console.error(e)
        return res.status(500).send({
            success: false,
            message: 'General error'
        })
    }
}

export const deleteRoomDetails = async (req, res) => {
    try {
        const { id } = req.params

        const deletedRoom = await RoomDetails.findByIdAndDelete(id);

        if (!deletedRoom) {
            return res.status(404).send({
                success: false,
                message: 'Room detail not found'
            })
        }

        return res.status(200).send({
            success: true,
            message: 'Room detail deleted successfully'
        })
    } catch (e) {
        console.error(e);
        return res.status(500).send({
            success: false,
            message: 'General error'
        })
    }
}


export const defaultRoomDetail = async(data)=>{
    const newroomsDetail = [
            {
              "room": "68278a779889627fe1528307",
              "roomNumber": 101,
              "details": [
                {
                  "name": "Habitación",
                  "description": "Habitación amplia con cama matrimonial y escritorio."
                },
                {
                  "name": "Climatización",
                  "description": "Aire acondicionado y calefacción central."
                },
                {
                  "name": "Baño",
                  "description": "Baño privado con ducha, toallas y artículos de tocador."
                },
                {
                  "name": "Seguridad",
                  "description": "Caja fuerte y cerradura electrónica con tarjeta."
                }
              ]
            },
            {
              "room": "68278a779889627fe1528308",
              "roomNumber": 102,
              "details": [
                {
                  "name": "Habitación",
                  "description": "Habitación doble con camas individuales y balcón con vista."
                },
                {
                  "name": "Tecnología",
                  "description": "TV de 42 pulgadas con canales por cable."
                },
                {
                  "name": "Climatización",
                  "description": "Ventilador de techo y calefacción eléctrica."
                },
                {
                  "name": "Baño",
                  "description": "Baño moderno con ducha de lluvia y secador de pelo."
                },
                {
                  "name": "Seguridad",
                  "description": "Puerta con cerradura inteligente y alarma de humo."
                }
              ]
            },
            {
              "room": "68278a779889627fe1528309",
              "roomNumber": 103,
              "details": [
                {
                  "name": "Habitación",
                  "description": "Suite con cama king size, sala privada y minibar."
                },
                {
                  "name": "Internet",
                  "description": "Wi-Fi premium con velocidad extra para streaming."
                },
                {
                  "name": "Tecnología",
                  "description": "Sistema de sonido Bluetooth y TV 4K de 55 pulgadas."
                },
                {
                  "name": "Baño",
                  "description": "Baño con jacuzzi, toallas de lujo y artículos de spa."
                },
                {
                  "name": "Seguridad",
                  "description": "Caja fuerte biométrica y vigilancia por cámara exterior."
                }
              ]
            },
            {
              "room": "68278a779889627fe152830a",
              "roomNumber": 104,
              "details": [
                {
                  "name": "Habitación",
                  "description": "Habitación compacta ideal para estancias cortas."
                },
                {
                  "name": "Internet",
                  "description": "Wi-Fi compartido del piso, buena cobertura."
                },
                {
                  "name": "Tecnología",
                  "description": "TV LED de 32 pulgadas con puertos HDMI."
                },
                {
                  "name": "Climatización",
                  "description": "Aire acondicionado de ventana y ventilador portátil."
                },
                {
                  "name": "Baño",
                  "description": "Baño compartido pero higienizado diariamente."
                }
              ]
            },
            {
              "room": "68278a779889627fe152830b",
              "roomNumber": 105,
              "details": [
                {
                  "name": "Habitación",
                  "description": "Loft moderno con cocina integrada y área de trabajo."
                },
                {
                  "name": "Internet",
                  "description": "Wi-Fi dedicado con router dentro de la habitación."
                },
                {
                  "name": "Tecnología",
                  "description": "Proyector con pantalla desplegable y sonido envolvente."
                },
                {
                  "name": "Climatización",
                  "description": "Aire acondicionado central con control remoto."
                },
                {
                  "name": "Baño",
                  "description": "Baño con cabina de hidromasaje y espejo antivaho."
                },
                {
                  "name": "Seguridad",
                  "description": "Sistema de entrada con reconocimiento facial."
                }
              ]
            },
            {
              "room": "68278a779889627fe152830d",
              "roomNumber": 106,
              "details": [
                {
                  "name": "Habitación",
                  "description": "Loft moderno con cocina integrada y área de trabajo."
                },
                {
                  "name": "Internet",
                  "description": "Wi-Fi dedicado con router dentro de la habitación."
                },
                {
                  "name": "Tecnología",
                  "description": "Proyector con pantalla desplegable y sonido envolvente."
                },
                {
                  "name": "Climatización",
                  "description": "Aire acondicionado central con control remoto."
                },
                {
                  "name": "Baño",
                  "description": "Baño con cabina de hidromasaje y espejo antivaho."
                },
                {
                  "name": "Seguridad",
                  "description": "Sistema de entrada con reconocimiento facial."
                }
              ]
            },
            {
              "room": "68278a779889627fe152830e",
              "roomNumber": 107,
              "details": [
                {
                  "name": "Habitación",
                  "description": "Loft moderno con cocina integrada y área de trabajo."
                },
                {
                  "name": "Internet",
                  "description": "Wi-Fi dedicado con router dentro de la habitación."
                },
                {
                  "name": "Tecnología",
                  "description": "Proyector con pantalla desplegable y sonido envolvente."
                },
                {
                  "name": "Climatización",
                  "description": "Aire acondicionado central con control remoto."
                },
                {
                  "name": "Baño",
                  "description": "Baño con cabina de hidromasaje y espejo antivaho."
                },
                {
                  "name": "Seguridad",
                  "description": "Sistema de entrada con reconocimiento facial."
                }
              ]
            }
    ]
    
    for (let index = 0; index < newroomsDetail.length; index++) {
        const roomDetail = newroomsDetail[index];
        roomDetail.room = data[index]
        const savedNewRoomDetail = new RoomDetails(roomDetail);
        const responseSavedRoomView = await savedNewRoomDetail.save();
    }
}