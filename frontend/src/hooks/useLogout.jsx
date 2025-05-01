import { useState } from 'react';
import { logoutRequest } from '../services/app'; // Asumo que tienes un servicio para la petición de logout
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import {jwtDecode} from 'jwt-decode'

export const useLogout = () => {
    const [isLoadingLogout, setIsLoadingLogout] = useState(false);
    const [errorLogout, setErrorLogout] = useState(false);
    const { clearAuthUser, user } = UserAuth();
    const navigate = useNavigate();

    const logout = async () => {
        setIsLoadingLogout(true);
        setErrorLogout(false);

        const response = await logoutRequest(); // Llama a tu función de petición de logout

        setIsLoadingLogout(false);

        if (response?.error) {
            setErrorLogout(true);
            toast.error('Error al cerrar sesión');
            console.error('Error al cerrar sesión:', response.e);
            return false; // Indica que el logout falló
        }

        // Si la petición al backend fue exitosa, limpia el estado en el frontend
        let userName = '';
        if (user) {
            try {
                const decodedToken = jwtDecode(user); // Decodifica el token almacenado en 'user'
                userName = decodedToken?.name; // Asumiendo que tu payload tiene un campo 'name'
            } catch (error) {
                console.error('Error al decodificar el token:', error);
            }
        }
        clearAuthUser();
        navigate('/login');
        toast.success(`Sesión cerrada exitosamente, hasta pronto ${userName || ''}`);
        return true; // Indica que el logout fue exitoso
    };

    return {
        logout,
        isLoadingLogout,
        errorLogout,
    };
};