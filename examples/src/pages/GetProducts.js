import React, { useState } from 'react'
import useAxios from '../hooks/useAxios'
import useFilter from '../hooks/useFilter'

const GetProducts = () => {

    const { data, error, loading } = useAxios("https://fakestoreapi.com/products")
    const productsData = data || []
    const [search, setSearch] = useState("")

    const filteredData = useFilter(productsData, search)

    return (
        <div>
            <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
            {loading ? <h1>LOADING.......</h1> :
                <div>
                    {filteredData.map((prod, index) => {
                        return <p key={index}>{prod.title}</p>
                    })}
                </div>
            }

            <div>{error && <p>{error}</p>}</div>
        </div>
    )
}

export default GetProducts