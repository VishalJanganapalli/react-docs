import React, { useEffect, useState } from 'react'
import axios from "axios"

const useUser = () => {
    const [user, setUser] = useState()

    useEffect(() => {
        const getUser = async () => {
            const response = await axios.get("https://fakestoreapi.com/users/1")
            setUser(response.data)
        }
        getUser()
    }, [])

    return user
}

export default useUser