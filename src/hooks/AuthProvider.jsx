import { createContext, useContext, useEffect, useState } from "react";

//Create the Context
const AuthContext = createContext()

//Custom hook to use AuthContext
export function useAuth() {
    return useContext(AuthContext)   
}

export default function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        //Check if token exists in localStorage
        const token = localStorage.getItem("token")
        if(token) setIsAuthenticated(true)
    },[])

    const login = (token) => {
        setIsAuthenticated(true)
        localStorage.setItem("token", token) //Save Login State
    }

    const logout =() => {
        localStorage.removeItem("token") //Clear Login State
        setIsAuthenticated(false)
    }

    return <AuthContext.Provider value={{isAuthenticated, login, logout}}>{children}</AuthContext.Provider>
}