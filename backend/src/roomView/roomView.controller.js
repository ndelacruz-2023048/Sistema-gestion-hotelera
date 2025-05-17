import RoomV from '../roomView/roomView.model.js'

export const getAllRoomView = async(req, res) => {
    try {
        const room = await RoomV.find()
        
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

export const addNewRoomV = async(req, res) => {
    try {
        let data = req.body
        let room = new RoomV(data)
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

export const updateRoomView = async (req, res) => {
    try {
        const { id } = req.params
        const updatedData = req.body

        const updatedRoom = await RoomV.findByIdAndUpdate(id, updatedData, {
            new: true,
            runValidators: true
        })

        if (!updatedRoom) {
            return res.status(404).send({
                success: false,
                message: 'Room not found'
            })
        }

        return res.status(200).send({
            success: true,
            message: 'Room updated successfully',
            room: updatedRoom
        })
    } catch (e) {
        console.error(e);
        return res.status(500).send({
            success: false,
            message: 'General error'
        })
    }
}

export const deleteRoomView = async (req, res) => {
    try {
        const { id } = req.params

        const deletedRoom = await RoomV.findByIdAndDelete(id)

        if (!deletedRoom) {
            return res.status(404).send({
                success: false,
                message: 'Room not found'
            })
        }

        return res.status(200).send({
            success: true,
            message: 'Room deleted successfully'
        })
    } catch (e) {
        console.error(e);
        return res.status(500).send({
            success: false,
            message: 'General error'
        })
    }
}
