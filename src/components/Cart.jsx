import React from 'react'
import CartItem from './CartItem'
import { FaArrowRightFromBracket } from "react-icons/fa6"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Cart() {

  const items = useSelector((store) => store.cart.items)

  return (
    <div className='flex justify-center'>
      {(items.length > 0) ?
        <div className='flex flex-col justify-center items-center w-[1000px]'>
          <h2 className='font-bold text-2xl my-6'>Shopping Cart</h2>
          {items.map((item) => {
            return (
              <div key={item.id} className='flex flex-col border border-dashed  w-full mb-4'>
                < CartItem key={item.id} item={item} />
              </div>
            )
          })}
          <div className='flex flex-col items-center justify-center w-full'>
            <div className='flex justify-around w-full border font-bold text-lg p-2'>
              <h2 >Grand Total:</h2>
              <h2>Amount</h2>
            </div>
            <Link to={'/checkOut'}>
              < button className='flex gap-1 mt-4 items-center border p-6 py-2 justify-center font-bold'>Proceed to Buy <FaArrowRightFromBracket /> </button>
            </Link>
          </div>
        </div > :
        <div className='flex flex-col gap-2 justify-center items-center m-10'>
          <h2 className='font-bold text-4xl'>Nothing in the cart</h2>
          <p>Add items to proceed</p>
          <button className='flex gap-1 mt-4 items-center justify-center font-bold border p-2'>Continue to Add Item <FaArrowRightFromBracket /> </button>
        </div>
      }
    </div>
  )
}

export default Cart