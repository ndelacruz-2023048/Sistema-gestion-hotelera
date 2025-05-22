import {useState, useEffect} from 'react'
import { deleteEventRequest, eventGetRequest, updateEventRequest } from '../routers/services/app'
import toast from 'react-hot-toast'

export const useEvents = () => {
    const [events, setEvents] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const getEvents = async() => {
        setIsLoading(true)
        const response = await eventGetRequest()
        setIsLoading(false)

        if(response.error){
            setError(true)
            if(response?.e?.response?.data?.errors){
                let arrayErrors = response?.e?.response?.data?.errors
                for(const error of arrayErrors){
                    return toast.error(error.msg)
                }
            }
            return toast.error(
                response?.e?.response?.data?.msg ||
                response?.e?.data?.msg ||
                'Error al intentar obtener los datos'
            )
        }
        setError(false)
        setEvents(response?.data?.events || []);
        // return toast.success('Datos traidos con exito')
    }

    const updateEvents = async(data, id, user, hotel, start, end)=> {
        const SendData = {
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
        
        const response = await updateEventRequest(id, SendData)
        if(response.error) {
            toast.error('Error al actualizar el evento')
        } else {
            toast.success('Evento actualizado con exito')
        }
        await getEvents()
    }

    const deleteEvents = async(id)=> {
        const response = await deleteEventRequest(id)
        if(response.error) {
            toast.error('Error al eliminar el evento')
        } else {
            toast.success('Evento eliminado con exito')
        }
        await getEvents()
    }

    useEffect(() => {
        getEvents(); // Llama a getEvents al montar el componente
    }, [])

    return {
        getEvents,
        updateEvents,
        deleteEvents,
        isLoading,
        error,
        setError,
        events
    }
}
