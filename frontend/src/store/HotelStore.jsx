import {create} from "zustand"

export const useHotelStore = create((set)=>({
    hotels:[],
    fetchHotels:async()=>{
        try {
            const response = await fetch(`http://localhost:3000/v1/hotelhavenis/hotels/getHotels`)
            const data = await response.json()
            set({hotels:data})
            return data
        } catch (error) {
            console.log("Error fetching hotels by id", error);
        }
    },
    updateHotel: async (id, updatedData) => {
        try {
          const response = await fetch(`http://localhost:3000/v1/hotelhavenis/hotels/updateHotel/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
          })
      
          const data = await response.json()
      
          if (response.ok) {
            set((state) => {
              const currentHotels = Array.isArray(state.hotels) ? state.hotels : []
      
              return {
                hotels: currentHotels.map((hotel) =>
                  hotel._id === id ? { ...hotel, ...updatedData } : hotel
                ),
              }
            })
      
            return data
          } else {
            console.error("Error updating hotel:", data.message)
            return data
          }
        } catch (error) {
          console.error("Error updating hotel:", error)
        }
      }
}))
