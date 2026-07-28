import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice';
import { Link } from 'react-router-dom';

function ProductItem(props) {


  const dispatch = useDispatch() //to send actions to redux reducers

  // handleAddToCart() is used to add item to the store when user click add to cart
  function handleAddToCart() {
    // console.log('added')
    dispatch(addItem(props.product))
  }

  // console.log(props.product.thumbnail)
  return (
    <div className='flex flex-col justify-between border shadow-xl border-[#D4A373] hover:scale-[103%] bg-[#ECFDF5] rounded-2xl border-dotted pb-1 w-full max-w-[288px] h-fit'>
      {/* when user clicks on link it will navigates to product page with particular id dynamically */}
      <Link to={`/productDetails/${props.product.id}`}>
        <div className='relative'>
          <img src={props.product.thumbnail} loading='lazy' className=' w-full h-[224px] sm:h-64 lg:h-[288px] object-cover self-center' alt="" />
          <h2 className='absolute bottom-2 flex justify-center bg-amber-50  px-2 py-1 items-center gap-1 rounded-lg font-bold text-md '>{props.product.rating} <FaStar className='text-[#038C02]' /> ({props.product.reviews.length})</h2>
        </div>
        <div className='flex flex-col p-2 gap-1'>
          <h2 className='font-bold'>{props.product.brand || "Unknown Brand"}</h2>
          <h3 className='text-sm sm:text-base'>{props.product.title}</h3>
          <p className='font-bold'>$ {props.product.price}</p>
        </div>
      </Link>
      <div className='p-2 text-center'>
        <button onClick={handleAddToCart} className='hover:scale-105 w-full border py-1 text-[#3e5c63] rounded-2xl px-4 hover:text-[#FF6202]'>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductItem