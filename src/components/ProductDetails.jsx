import React from 'react'
import { FaStar } from 'react-icons/fa'

function ProductDetails({ product }) {
  return (
    <div className='flex justify-between border w-[1200px] h-[500px] p-6 gap-2'>
      <div className='w-[40%] object-cover'>
        <img src={product.thumbnail} className=' w-[100%] h-[100%]' alt="" />
      </div>
      <div className=' flex flex-col justify-between w-[60%] p-2'>
        <div className='flex flex-col p-2 pt-0 gap-3'>
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
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails