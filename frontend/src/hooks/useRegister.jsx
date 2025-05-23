import React, { useState } from 'react'
import { registerRequest } from '../routers/services/app'
import { toast } from 'sonner'

export const useRegister = ()=> {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const register = async(data)=> {
        setIsLoading(true)
        const user = {
            name: data?.name,
            surname: data?.surname,
            address: data?.address,
            mobilePhone: data?.mobilePhone,
            country: data?.countryCode,
            username: data?.username,
            email: data?.email,
            password: data?.password
        }

        const response = await registerRequest(user)
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
                'Error al intentar Registrate'
            )
        }
        setError(false)
        return toast.success(`${user.name}, Has sido registrado exitosamente`)
    }

    return {
        register,
        isLoading,
        error,
        setError
    }
}