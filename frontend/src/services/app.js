import axios from "axios"

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:3000/v1/hotelhavenis',
        timeout: 2000
    }
)

export const loginRequest = async(user) => {
    try {
        return await apiClient.post('/login', user, {
            type: 'multipart/form-data'
        })
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}