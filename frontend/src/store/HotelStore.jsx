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
            console.log("Error fetching hotels by id");
        }
    },
    newHotel:{},
    setNewHotel:(p)=>{
        set({newHotel:p})
    },
    createHotel:async(p)=>{
        const response = await fetch("http://localhost:3000/v1/hotelhavenis/hotels/addHotels",{
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

}))