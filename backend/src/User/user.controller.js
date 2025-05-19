import User from "./user.model.js"
import Reservation from '../reservation/reservation.model.js'

export const getAll = async(req, res) => {
    try {
        const users = await User.find()

        if(users.length === 0){
            return res.status(404).send(
                {
                    success: false,
                    message: 'Users not found'
                }
            )
        }
        return res.send(
            {
                success: true,
                message: 'Users found:', 
                users
            }   
        )
    } catch (e) {
        console.error(e);
        return res.status(500).send(
            {
                success: false,
                message: 'Genearl error'
            }
        )
    }
}

export const getTopUserByReservations = async (req, res) => {
  try {
    const result = await Reservation.aggregate([
      { $group: { _id: "$user", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 3 },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "user"
        }
      },
      { $unwind: "$user" }
    ]);

    res.send({
      success: true,
      topUsers: result // ahora es una lista
    })
  } catch (err) {
    console.error(err);
    res.status(500).send({
      success: false,
      message: 'Error al obtener el usuario con más reservas'
    })
  }
}