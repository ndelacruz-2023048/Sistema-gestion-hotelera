import { useState } from "react"
import { newEventRequest } from "../routers/services/app"
import { toast } from 'react-hot-toast'

export const useEvent = ()=> {
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const events = async(data, user, hotel, start, end)=> {
        setIsLoading(true)
        const event = {
            hotel: hotel,
            name: data?.name,
            description: data?.description,
            startDate: start,
            endDate: end,
            location: data?.location,
            organizer: data?.organizer,
            designated: user,
            capacity: data?.capacity,
            price: data?.price,
        }

        const response = await newEventRequest(event)
        setIsLoading(false)
        if(response.error){
            setError(true)
            if(response?.e?.response?.data?.errors){
                let arrayErros = response?.e?.response?.data?.errors
                for(const error of arrayErros) {
                    return toast.error(error.msg)
                }
            }
            return toast.error(
                response?.e?.response?.data?.msg ||
                response?.e?.data?.msg ||
                'Error al intentar crear un evento'
            )
        }
        setError(false)
        return toast.success('Evento creado con exito')
        
    }

    return {
        events,
        isLoading,
        error,
        setError
    }
}