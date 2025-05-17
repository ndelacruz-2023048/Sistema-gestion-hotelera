import Room from './room.model.js'

export const getAllRoom = async(req, res) => {
    try {
        const room = await Room.find()
        
        if(room.length === 0){
            return res.status(404).send(
                {
                    success: false,
                    message: 'Rooms not found'
                }
            )
        }
        return res.send(
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

export const getRoomsByHotel = async(req, res) => {
    try {
        const room = await Room.find({hotel:req.params.id})
        .populate('details')
        .populate('views');
        
        if(!room){
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
    }catch(e){
        console.error(e);
        return res.status(500).send(
            {
                success: false,
                message: 'General error'
            }
        )
    }
}

export const getRoomById = async(req,res)=>{
    try {
        console.log(req.params.id);
        
        const room = await Room.findById(req.params.id)
        .populate('details')
        .populate('views');
        console.log(room);
        if(!room){
            return res.status(404).send(
                {
                    success: false,
                    message: 'Room not found'
                }
            )
        }

        return res.status(200).send(
            {
                success: true,
                message: 'Room found:',
                room
            }
        )
    }catch(e){
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
        let room = new Room(data)
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

export const updateRoom = async(req, res) =>{
    try {
        const data = req.body
        const room = await Room.findByIdAndUpdate(
            req.params.id, 
            data, 
            {new: true}
        )
        return res.status(200).send(
            {
                success: true,
                message: `Room updated successfully`,
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

export const deleteRoom = async (req, res) => {
    try {
        let room = await Room.findByIdAndDelete(req.params.id)
            return res.status(200).send(
            {
                success: true,
                message: `Room deleted successfully`,
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

export const defaultRooms = async(newHotelData)=>{
    const newRooms = [
        {
          "hotel": "6826de70b033c53f55289e6a",
          "nameOfTheRoom": "Habitación Premium",
          "typeRoom": "Premium",
          "capacity": { "childrens": 2, "adults": 1 },
          "squareMeters": 35,
          "description": "Vista al mar, cama king y jacuzzi privado.",
          "disponibility": {
            "fechas_disponibles": "Resto del mes",
            "fechas_ocupadas": ["2025-05-03", "2025-05-07"]
          }
        },
        {
          "hotel": "6826de70b033c53f55289e6b",
          "nameOfTheRoom": "Suite Ejecutiva",
          "typeRoom": "Suite",
          "capacity": { "childrens": 1, "adults": 2 },
          "squareMeters": 45,
          "description": "Suite con escritorio, minibar y vista panorámica.",
          "disponibility": {
            "fechas_disponibles": "Resto del mes",
            "fechas_ocupadas": ["2025-05-10"]
          }
        },
        {
            "hotel": "6826de70b033c53f55289e6a",
            "nameOfTheRoom": "Deluxe",
            "typeRoom": "Premium",
            "capacity": { "childrens": 2, "adults": 1 },
            "squareMeters": 35,
            "description": "Amplia habitación con baño privado y terraza.",
            "disponibility": {
              "fechas_disponibles": "Resto del mes",
              "fechas_ocupadas": ["2025-05-03", "2025-05-07"]
            }
          },
          {
            "hotel": "6826de70b033c53f55289e6b",
            "nameOfTheRoom": "Estandar",
            "typeRoom": "Suite",
            "capacity": { "childrens": 1, "adults": 2 },
            "squareMeters": 45,
            "description": "Habitación sencilla con baño compartido.",
            "disponibility": {
              "fechas_disponibles": "Resto del mes",
              "fechas_ocupadas": ["2025-05-10"]
            }
          },
          {
            "hotel": "6826de70b033c53f55289e6a",
            "nameOfTheRoom": "Semipremium",
            "typeRoom": "Premium",
            "capacity": { "childrens": 2, "adults": 1 },
            "squareMeters": 35,
            "description": "TV de 55'', ducha de hidromasaje y escritorio.",
            "disponibility": {
              "fechas_disponibles": "Resto del mes",
              "fechas_ocupadas": ["2025-05-03", "2025-05-07"]
            }
          },
          {
            "hotel": "6826de70b033c53f55289e6b",
            "nameOfTheRoom": "Suite Ejecutiva",
            "typeRoom": "Suite",
            "capacity": { "childrens": 1, "adults": 2 },
            "squareMeters": 45,
            "description": "Suite con escritorio, minibar y vista panorámica.",
            "disponibility": {
              "fechas_disponibles": "Resto del mes",
              "fechas_ocupadas": ["2025-05-10"]
            }
          },
          {
            "hotel": "6826de70b033c53f55289e6b",
            "nameOfTheRoom": "Penthouse",
            "typeRoom": "Penthouse",
            "capacity": { "childrens": 1, "adults": 2 },
            "squareMeters": 45,
            "description": "Penthouse con cocina, sala y vista de 360°.",
            "disponibility": {
              "fechas_disponibles": "Resto del mes",
              "fechas_ocupadas": ["2025-05-10"]
            }
          }
    ]

    

    const existDefaultRooms = await Room.find({nameOfTheRoom:"Hotel Vista Hermosa"})
    const idHotels = []
    let listCreatedRooms = []
    newHotelData.map((element)=>{
        idHotels.push(element._id)
    })
    
    if(existDefaultRooms.length === 0 ){ 
        for (let index = 0; index < newRooms.length; index++) {
            const room = newRooms[index];
            room.hotel = index <= 2 ? idHotels[0] : idHotels[1];
          
            const savedNewRoom = new Room(room);
            const responseSavedRoom = await savedNewRoom.save();
            listCreatedRooms.push(responseSavedRoom);
        }

        return listCreatedRooms
    }else{
        return{success:false}
    }
}