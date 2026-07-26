import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import useFetch from '../utils/useFetch'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'

function ProductDetails() {

  const param = useParams()

  const [product, setProduct] = useState(null)
  const [err, setErr] = useState('')
  const [load, setLoad] = useState(true)

  useEffect(() => {
    async function fetch() {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${param.id}`)
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

  const dispatch = useDispatch()

  function handleAddToCart() {
    console.log('added')
    dispatch(addItem(product))
  }


  return (
    <div className='flex justify-center mt-15'>
      <div className='flex justify-between border w-[900px] h-[500px] p-6 gap-2'>
        <div className='w-[40%] object-cover'>
          <img src={product.thumbnail} className=' w-[100%] h-[100%]' alt="" />
        </div>
        <div className=' flex flex-col justify-between w-[60%] p-2'>
          <div className='flex flex-col p-2 pt-0 gap-6'>
            <div className='flex flex-col gap-1'>
              <div className='flex gap-2 items-center'>
                <h2 className='text-3xl font-bold'>{product.brand || "Unkown Brand"}</h2>
                <h3 className='text-lg self-end'>({product.category})</h3>
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
            <p className='font-bold text-3xl'>$ {product.price}</p>

          </div>
          <div className='mb-7 text-center'>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails