import React, { useEffect, useState } from 'react'
import axios from 'axios'

//custom hook is create to fetch data from dummy api
function useFetch() {

    const [allProducts, setAllProducts] = useState([]) //to store fetched data useState is used
    const [error, setError] = useState() //to store error while fetching useState is used
    const [loading, setLoading] = useState(true) //to store loading state

    useEffect(() => {
        async function calling() {
            try {
                const API = 'https://dummyjson.com/products'
                const data = await axios.get(API) //to send api request
                // console.log(data.data.products)
                setAllProducts(data.data.products) // this will store response to the state
            }
            catch (err) {
                console.log(err.message)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        calling()
    }, [])
    return { allProducts, error, loading }
}

export default useFetch