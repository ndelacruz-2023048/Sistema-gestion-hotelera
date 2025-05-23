import { useState } from "react"
import { newEventRequest } from "../routers/services/app"
import { toast } from 'sonner'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')

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

        await toast.promise(
            async () => {
                const response = await newEventRequest(event);
                if(response.error) {
                    setError(true);
                    if(response?.e?.response?.data?.errors) {
                        let arrayErros = response?.e?.response?.data?.errors;
                        throw new Error(arrayErros[0].msg);
                    }
                    throw new Error(
                        response?.e?.response?.data?.msg ||
                        response?.e?.data?.msg ||
                        'Error al intentar crear un evento'
                    );
                }
                setError(false);
                socket.emit('newEvent', {...event});
                return response;
            },
            {
                loading: 'Creando nuevo evento...',
                success: () => ({
                    message: 'Evento creado con éxito',
                    description: 'El nuevo evento ha sido registrado correctamente'
                }),
                error: (error) => ({
                    message: 'Error al crear evento',
                    description: error.message
                })
            }
        );
    }

    return {
        events,
        isLoading,
        error,
        setError
    }
}