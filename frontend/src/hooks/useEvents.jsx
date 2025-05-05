import {useState, useEffect} from 'react'
import { eventGetRequest } from '../routers/services/app'
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

    useEffect(() => {
        getEvents(); // Llama a getEvents al montar el componente
    }, [])
    return {
        getEvents,
        isLoading,
        error,
        setError,
        events
    }
}
