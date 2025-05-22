import {useState, useEffect} from 'react'
import { getHotelRequest } from '../routers/services/app'
import toast from 'react-hot-toast'

export const useHotels = () => {
    const [hotels, setHotels] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const getHotels = async() => {
        setIsLoading(true)
        const response = await getHotelRequest()
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
        setHotels(response?.data?.hotels || []);
        // return toast.success('Datos traidos con exito')
    }

    useEffect(() => {
        getHotels(); // Llama a getEvents al montar el componente
    }, [])

    return {
        getHotels,
        isLoading,
        error,
        setHotels,
        hotels
    }
}
