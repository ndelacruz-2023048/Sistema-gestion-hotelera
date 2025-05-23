import { create } from "zustand";

export const useRoomStore = create((set,get) => ({
    hotelId:0,
    setHotelId:(p)=>{
        set({hotelId:p})
    },
    dataFileImageHotel:[],
    setDataFileImageHotel:(p)=>{
        const {dataFileImageHotel} = get()
        set({dataFileImageHotel:p})
    },
    rooms:[],
    fetchRooms:async()=>{
        try {
            const response = await fetch(`http://localhost:3000/v1/hotelhavenis/rooms/getAllRoom`)
            const data = await response.json()
            set({rooms:data})
            return data
        } catch (error) {
            console.log("Error fetching hotels by id");
        }
    },
    roomsByHotel:[],
    fetchRoomsByHotel:async(hotelId)=>{
        try {
            const response = await fetch(`http://localhost:3000/v1/hotelhavenis/rooms/getRoomByHotel/${hotelId}`)
            const data = await response.json()
            set({roomsByHotel:data})
            return data
        } catch (error) {
            console.log('Error fetching post by id',error);
        }
    },
    roomById:{},
    fetchRoomsById:async(roomId)=>{
        try {
            const response = await fetch(`http://localhost:3000/v1/hotelhavenis/rooms/getRoomById/${roomId}`)
            const data = await response.json()
            set({roomById:data})
            return data
        } catch (error) {
            console.log('Error fetching post by id',error);
        }
    },
    createRoom:async(p)=>{
        const response = await fetch("http://localhost:3000/v1/hotelhavenis/rooms/addNewRoom",{
            method:"POST",
            headers: {
                "Content-Type": "application/json" // Le dice al servidor que el cuerpo es JSON
            },
            body:JSON.stringify(p)
        })
        const responseJSON = await response.json()
        return {
            data:responseJSON
        }
    },
    createRoomDetail:async(p)=>{
        const response = await fetch("http://localhost:3000/v1/hotelhavenis/room-details/addRooms",{
            method:"POST",
            headers: {
                "Content-Type": "application/json" // Le dice al servidor que el cuerpo es JSON
            },
            body:JSON.stringify(p)
        })
        const responseJSON = await response.json()
        return {
            data:responseJSON
        }
    },
    createRoomView:async(p)=>{
        const response = await fetch("http://localhost:3000/v1/hotelhavenis/room-view/addNewRoomV",{
            method:"POST",
            headers: {
                "Content-Type": "application/json" // Le dice al servidor que el cuerpo es JSON
            },
            body:JSON.stringify(p)
        })
        const responseJSON = await response.json()
        return {
            data:responseJSON
        }
    }
}))