import axios from "axios"
import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data,setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()
        
        const fetchdata = async () => {
            try {
                const response = await axios.get(url, { signal: controller.signal })
                setData(response.data.data)
            } catch(error) {
                if(axios.isCancel(error)) {
                    console.log('Request canceled:', error.message);   
                } else if(error.response) {
                    setError(`Error: ${error.response.status} ${error.response.statusText}`);
                } else if(error.request) {
                    setError('Error: No response received');
                } else {
                    setError(error.message)
                }
            } finally {
                setLoading(false)
            }
        }
        fetchdata()

        return () => controller.abort()
    },[url])    

    return { data, loading, error }
} 

export default useFetch