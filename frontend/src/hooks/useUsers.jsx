import { useState, useEffect } from 'react'
import { getUserRequest } from '../routers/services/app'
import { toast } from 'sonner'

export const useUsers = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const getUsers = async() => {
        setIsLoading(true)
        const response = await getUserRequest()
        setIsLoading(false)

        if(response.error){
            setError(true)
            if(response?.e?.response?.data?.errors){
                let arrayErrors = response?.e?.response?.data?.errors
                for (const error of arrayErrors) {
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
        setUsers(response?.data?.users)
    }
    useEffect(() => {
        getUsers(); // Llama a getEvents al montar el componente
    }, [])
    return {
        getUsers,
        isLoading,
        error,
        setError,
        users
    }
}