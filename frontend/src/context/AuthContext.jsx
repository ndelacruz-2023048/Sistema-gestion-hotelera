import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    const [user,setUser] = useState(null);
    useEffect(()=>{
        if(user === null){

        }
        setUser("juanito")
        
    },[]) 

    return(
        <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
    )
}

export const UserAuth = ()=>{
    return useContext(AuthContext)
}