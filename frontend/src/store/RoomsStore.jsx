import { create } from "zustand";

export const useRoomStore = create((set) => ({
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
    
}))