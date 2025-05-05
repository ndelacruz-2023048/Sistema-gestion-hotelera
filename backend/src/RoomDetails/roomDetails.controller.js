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