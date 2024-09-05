import { useState, useContext, createContext, useCallback } from "react"

const LoadingContext =  createContext()
export const useLoading = () => useContext(LoadingContext)

export default function LoadingProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false)

    const startLoading = useCallback(() => setIsLoading(true), [])
    const stopLoading = useCallback(() => setIsLoading(false), [])

    return (
        <LoadingContext.Provider value={{ startLoading, stopLoading, isLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}