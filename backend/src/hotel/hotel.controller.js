import Hotel from '../hotel/hotel.model.js'
import Room from '../room/room.model.js'
import roomDetails from '../RoomDetails/roomDetails.model.js'
import roomView from '../roomView/roomView.model.js'

export const getAllHotels = async(req, res) => {
    try {
        const hotels = await Hotel.find()
        return res.send(
            {
                success: true,
                message: 'Hotels found:', 
                hotels
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

export const addNewHotel = async(req, res) => {
    try {
        let data = req.body
        let hotel = new Hotel(data)
        await hotel.save()
        return res.status(200).send(
            {
                success: true,
                message: `Hotel created successfully`,
                hotel
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

export const updateHotel = async(req, res) => {
    try {
        let data = req.body
        let hotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            data,
            { new: true }
        )
        return res.status(200).send(
            {
                success: true,
                message: `Hotel updated successfully`,
                hotel
            }
        )
    }
    catch (e) {
        console.error(e);
        return res.status(500).send(
            {
                success: false,
                message: 'General error'
            }
        )
    }
}

export const deleteHotel = async (req, res) => {
    try {
        // Eliminar el hotel
        const hotel = await Hotel.findByIdAndDelete(req.params.id)
        if (!hotel) {
            return res.status(404).send({
                success: false,
                message: 'Hotel not found'
            })
        }

        const rooms = await Room.find({ hotel: req.params.id })

        const roomIds = rooms.map(room => room._id)

        await roomDetails.deleteMany({ room: { $in: roomIds } })

        await roomView.deleteMany({ room: { $in: roomIds } })

        await Room.deleteMany({ hotel: req.params.id })
        return res.status(200).send({

            success: true,
            message: 'Hotel and related data deleted successfully',
            hotel
        });
    } catch (e) {
        console.error(e);
        return res.status(500).send({
            success: false,
            message: 'General error'
        });
    }
};

export const defaultHotels =async ()=>{
    const newHotel = [
        {
            "name": "Hotel Vista Hermosa",
            "address": "19 Avenida zona 17",
            "category": "premium",
            "price": 1999.99,
            "image": "https://res.cloudinary.com/dtmwybty7/image/upload/v1747505665/pexels-asman-chema-91897-594077_rc8mn1.jpg"
        },
        {
            "name": "Hotel El Encanto",
            "address": "5a Avenida zona 10",
            "category": "estandar",
            "price": 799.00,
            "image": "https://res.cloudinary.com/dtmwybty7/image/upload/v1747505844/pexels-pixabay-261395_or9or5.jpg"
        }
    ]

    const existDefaultHotels = await Hotel.find({name:"Hotel Vista Hermosa"})
    if(existDefaultHotels.length === 0 ){ 
        const savedHotels = await Hotel.insertMany(newHotel);
        return savedHotels
    }else{
        return{success:false}
    }
}