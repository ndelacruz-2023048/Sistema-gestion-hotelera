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
