import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice';
import { Link } from 'react-router-dom';

function ProductItem(props) {


  const dispatch = useDispatch()

  function handleAddToCart() {
    console.log('added')
    dispatch(addItem(props.product))
  }

  console.log(props.product.thumbnail)
  return (
    <div className='flex flex-col justify-between border w-[250px] h-fit'>
      <Link to={`/productDetails/${props.product.id}`}>
        <div className='relative'>
          <img src={props.product.thumbnail} loading='lazy' className=' w-[250px] h-[300px] self-center' alt="" />
          <h2 className='absolute bottom-2 left-2 flex justify-center items-center gap-1 font-bold text-md'>{props.product.rating} <FaStar /> ({props.product.reviews.length})</h2>
        </div>
        <div className='flex flex-col p-2 pt-0'>
          <h2 className='font-bold'>{props.product.brand || "Unkown Brand"}</h2>
          <h3 className='text-md'>{props.product.title}</h3>
          <p className='font-bold'>$ {props.product.price}</p>
        </div>
      </Link>
      <div className='p-2 text-center'>
        <button onClick={handleAddToCart} className='hover:scale-105 border py-1 p-2'>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductItem