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
export const defaultRoomViews = async(data)=>{
    console.log(data);
    
    const newRoomsViews = [
        {
          "room": "68278a779889627fe1528307",
          "squareMeters": 25,
          "bedTypes": "queen",
          "floor": 2,
          "images": [
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747509842/pexels-pixabay-276724_bps11s.jpg",
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747509836/pexels-pixabay-210265_oq6u6n.jpg",
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747509838/pexels-pixabay-271618_yexchq.jpg",
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747509839/pexels-pixabay-259962_rafqi0.jpg"
          ],
          "available": true,
          "pricePerNight": {
            "$numberDecimal": "150.50"
          },
          "__v": 0
        },
        {
          "room": "68278a779889627fe1528308",
          "squareMeters": 30,
          "bedTypes": "king",
          "floor": 3,
          "images": [
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747510078/pexels-wiki15-canton-598594475-28681145_jdjcpk.jpg",
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747510077/pexels-alex-tyson-919593032-19966797_tske8p.jpg",
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747510077/pexels-alexander-f-ungerer-157458816-21768110_wkoqc2.jpg",
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747510073/pexels-alexander-f-ungerer-157458816-21372013_mh1qja.jpg"
          ],
          "available": true,
          "pricePerNight": {
            "$numberDecimal": "180.75"
          },
          "__v": 0
        },
        {
          "room": "68278a779889627fe152830a",
          "squareMeters": 35,
          "bedTypes": "double",
          "floor": 1,
          "images": [
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747510268/pexels-alexander-f-ungerer-157458816-20849816_epmrmr.jpg",
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747510273/pexels-alexander-f-ungerer-157458816-21012296_uedw2r.jpg",
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747510274/pexels-alexander-f-ungerer-157458816-21372017_cr93t5.jpg",
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747510275/pexels-alexander-f-ungerer-157458816-21768115_y4tsbu.jpg"
          ],
          "available": false,
          "pricePerNight": {
            "$numberDecimal": "200.00"
          },
          "__v": 0
        },
        {
          "room": "68278a779889627fe152830b",
          "squareMeters": 28,
          "bedTypes": "individual",
          "floor": 4,
          "images": [
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747510078/pexels-wiki15-canton-598594475-28681145_jdjcpk.jpg",
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747510077/pexels-alex-tyson-919593032-19966797_tske8p.jpg",
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747510077/pexels-alexander-f-ungerer-157458816-21768110_wkoqc2.jpg",
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747510073/pexels-alexander-f-ungerer-157458816-21372013_mh1qja.jpg"
          ],
          "available": true,
          "pricePerNight": {
            "$numberDecimal": "120.50"
          },
          "__v": 0
        },
        {
          "room": "68278a779889627fe152830c",
          "squareMeters": 40,
          "bedTypes": "queen",
          "floor": 5,
          "images": [
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747509842/pexels-pixabay-276724_bps11s.jpg",
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747509836/pexels-pixabay-210265_oq6u6n.jpg",
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747509838/pexels-pixabay-271618_yexchq.jpg",
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747509839/pexels-pixabay-259962_rafqi0.jpg"
          ],
          "available": true,
          "pricePerNight": {
            "$numberDecimal": "210.00"
          },
          "__v": 0
        },
        {
          "room": "68278a779889627fe152830d",
          "squareMeters": 50,
          "bedTypes": "king",
          "floor": 6,
          "images": [
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747510078/pexels-wiki15-canton-598594475-28681145_jdjcpk.jpg",
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747510077/pexels-alex-tyson-919593032-19966797_tske8p.jpg",
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747510077/pexels-alexander-f-ungerer-157458816-21768110_wkoqc2.jpg",
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747510073/pexels-alexander-f-ungerer-157458816-21372013_mh1qja.jpg"
          ],
          "available": false,
          "pricePerNight": {
            "$numberDecimal": "250.50"
          },
          "__v": 0
        },
        {
          "room": "68278a779889627fe152830e",
          "squareMeters": 55,
          "bedTypes": "double",
          "floor": 7,
          "images": [
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747510531/pexels-alexander-f-ungerer-157458816-28906766_odjtez.jpg",
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747510532/pexels-fotoaibe-1571459_n1j0vp.jpg",
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747510531/pexels-curtis-adams-1694007-7601116_nrexte.jpg",
            "https://res.cloudinary.com/dtmwybty7/image/upload/v1747510531/pexels-atbo-66986-245208_ly9wf7.jpg"
          ],
          "available": true,
          "pricePerNight": {
            "$numberDecimal": "280.00"
          },
          "__v": 0
        }
      ]
      
    for (let index = 0; index < newRoomsViews.length; index++) {
        const roomView = newRoomsViews[index];
        roomView.room = data[index]
        const savedNewRoomView = new RoomV(roomView);
        const responseSavedRoomView = await savedNewRoomView.save();
    }
    
}
