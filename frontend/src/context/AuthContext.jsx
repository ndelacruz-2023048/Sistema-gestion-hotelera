import { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true)

    const setAuthUser = (userData) => {
        setUser(userData);
        setIsAuthenticated(true);
        setLoading(false)
    };

    const clearAuthUser = () => {
        setUser(null);
        setIsAuthenticated(false);
        setLoading(false)
        Cookies.remove('access_token')
    };

    useEffect(() => {
        const token = Cookies.get('access_token');
        
        if (token) {
            setAuthUser(token)
        }
        setLoading(false)
    }, []);

    if (loading) {
        // Puedes mostrar un indicador de carga aquí mientras se verifica la sesión
        // return <div>Cargando...</div>; // O un componente de carga más sofisticado
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, setAuthUser, clearAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};