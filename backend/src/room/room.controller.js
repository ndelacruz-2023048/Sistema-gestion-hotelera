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