import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'

function ProductDetails() {

  const param = useParams() // useParams is used to get id for detailed view of the product

  const [product, setProduct] = useState(null)
  const [err, setErr] = useState('')
  const [load, setLoad] = useState(true)

  // useEffect is used to fetch data again when the product id is changed
  useEffect(() => {
    async function fetch() {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${param.id}`) //to dynamically fetch data of a particular product
        // console.log(response.data)
        setProduct(response.data)
      } catch (error) {
        setErr(error.message)
      } finally {
        setLoad(false)
      }
    }
    fetch()
  }, [param.id])

  // console.log(product)

  if (err) {
    return <h2 className="flex justify-center mt-20 font-medium text-2xl">{err}</h2>;
  }

  if (load) {
    return <h2 className="flex justify-center font-bold text-2xl mt-20">Loading...</h2>;
  }

  if (!product) {
    return <h2 className="text-center text-2xl mt-10">No Matching Product</h2>;
  }

  const dispatch = useDispatch() //to send actions to redux reducers

  // handleAddToCart() is used to add item to the store when user click add to cart
  function handleAddToCart() {
    // console.log('added')
    dispatch(addItem(product))
  }


  return (
    <div className='flex justify-center  mt-15 mb-10 px-4 lg:px-8'>
      <div className='flex flex-col lg:flex-row justify-between border bg-[#ECFDF5] w-full max-w-6xl p-6 gap-4'>
        <div className='w-full lg:flex-1 object-cover'>
          <img src={product.thumbnail} loading='lazy' className=' w-[100%] h-[288px] lg:h-full object-cover' alt="" />
        </div>
        <div className=' flex flex-col justify-between w-full lg:w-3/5 p-2'>
          <div className='flex flex-col p-2 pt-0 gap-6'>
            <div className='flex flex-col gap-1'>
              <div className='flex flex-col sm:flex-row gap-2 sm:items-center'>
                <h2 className='text-2xl sm:text-3xl font-bold'>{product.brand || "Unkown Brand"}</h2>
                <h3 className='text-lg sm:self-end'>({product.category})</h3>
              </div>
              <h3 className='text-lg'>{product.title}</h3>
            </div>
            <div className='flex gap-1 items-center'>
              <h2 className='font-bold'>{product.rating}</h2>
              <FaStar className='text-green-700' />
              <h2>({product.reviews.length})</h2>
            </div>
            <p className='text-justify'>{product.description}</p>
            <div className='flex gap-1'>
              <h2>{product.availabilityStatus}</h2>
              <h2>({product.stock} available)</h2>
            </div>
            <p className='font-bold text-2xl sm:text-3xl'>$ {product.price}</p>

          </div>
          <div className='mb-4 lg:mb-7 text-center'>
            <button onClick={handleAddToCart} className='bg-[#3e5c63] w-full sm:w-auto rounded-2xl px-6 border py-1 text-white hover:text-[#FF6202] hover:bg-transparent hover:scale-105'>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails