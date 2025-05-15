import Hotel from '../hotel/hotel.model.js'

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

export const deleteHotel = async(req, res) => {
    try {
        let hotel = await Hotel.findByIdAndDelete(
            req.params.id
        )
        return res.status(200).send(
            {
                success: true,
                message: `Hotel deleted successfully`,
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