import {useState, useEffect, useCallback} from 'react'
import { deleteEventRequest, eventGetRequest, updateEventRequest } from '../routers/services/app'
import toast from 'react-hot-toast'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')

export const useEvents = () => {
    const [events, setEvents] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const getEvents = useCallback(async() => {
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
            } else if(!response?.data?.events || response.data.events.length < 1){
                return toast.error('No hay eventos disponibles o creados');
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
    }, [])

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
        getEvents();

        // Escuchar eventos en tiempo real
        socket.on('newEvent', (newEvent) => {
            setEvents((prevEvents) => [...newEvent, ...prevEvents]);
        })

        return () => {
            socket.off('newEvent')
        };
    }, [getEvents]);

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
