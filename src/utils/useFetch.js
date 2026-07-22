import React, { useEffect, useState } from 'react'
import axios from 'axios'

function useFetch() {

    const [allProducts, setAllProducts] = useState([])
    const [error,setError] = useState()

    useEffect(() => {
        async function calling() {
            try {
                const API = 'https://dummyjson.com/products'
                const data = await axios.get(API)
                console.log(data.data.products)
                setAllProducts(data.data.products)
            }
            catch(err){
                console.log(err)
                setError(err)
            }
        }
        calling()
    }, [])
    return {allProducts, error}
}

export default useFetch