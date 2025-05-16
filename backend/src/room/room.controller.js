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