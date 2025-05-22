import axios from "axios"

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:3000/v1/hotelhavenis',
        withCredentials: true,
        timeout: 2000
    }
)

//Auth Methods

export const registerRequest = async(user)=> {
    try {
        return await apiClient.post('/auth/register', user)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const loginRequest = async(user) => {
    try {
        return await apiClient.post('/auth/login', user)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const logoutRequest = async()=> {
    try {
        return await apiClient.post('/auth/logout')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

//User methods
export const getUserRequest = async() => {
    try {
        return await apiClient.get('/user/list')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

//Event methods
export const eventGetRequest = async()=> {
    try {
        return await apiClient.get('/events/list')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const newEventRequest = async(event)=> {
    try {
        return await apiClient.post('/events/new', event)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const updateEventRequest = async(id, event)=> {
    try {
        return await apiClient.put(`/events/updated/${id}`, event)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const deleteHotel = async (id) => {
    try {
        return await apiClient.delete(`/hotels/deleteHotel/${id}`)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}