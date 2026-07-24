import React from 'react'
import { FaStar } from "react-icons/fa";

function ProductItem(props) {
  console.log(props.product.thumbnail)
  return (
    <div className='flex flex-col justify-between border w-[250px] h-fit'>
      <div className='relative'>
        <img src={props.product.thumbnail} className=' w-[250px] h-[300px] self-center' alt="" />
        <h2 className='absolute bottom-2 left-2 flex justify-center items-center gap-1 font-bold text-md'>{props.product.rating} <FaStar /> ({props.product.reviews.length})</h2>
      </div>
      <div className='flex flex-col p-2 pt-0'>
        <h2 className='font-bold'>{props.product.brand || "Unkown Brand"}</h2>
        <h3 className='text-md'>{props.product.title}</h3>
        <p className='font-bold'>$ {props.product.price}</p>
      </div>
      <div className='p-2 text-center'>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductItem