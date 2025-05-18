import Room from './room.model.js'
import Reservation from '../Reservation/reservation.model.js';

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

export const getMostReservedRoom = async (req, res) => {
  try {
    const result = await Reservation.aggregate([
      { $match: { room: { $ne: null } } },
      { $group: { _id: "$room", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 3 },
      {
        $lookup: {
          from: "rooms",
          localField: "_id",
          foreignField: "_id",
          as: "room"
        }
      },
      { $unwind: "$room" }
    ]);

    res.send({
      success: true,
      mostReservedRooms: result // ahora es una lista
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      success: false,
      message: 'Error al obtener la habitación más reservada'
    })
  }
}