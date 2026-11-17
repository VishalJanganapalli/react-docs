import React, { useEffect, useState } from 'react'
import axios from "axios"

const useAxios = (apiLink) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
       const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(apiLink);
        setData(response.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    },[apiLink])

  return {data, loading, error} 
}

export default useAxios