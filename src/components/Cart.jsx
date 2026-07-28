import React from 'react'
import { lazy, Suspense } from 'react'
const CartItem = lazy(() => import('./CartItem'))
import { FaArrowRightFromBracket } from "react-icons/fa6"
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearCart } from '../utils/cartSlice'

function Cart() {

  const items = useSelector((store) => store.cart.items)

  const dispatch = useDispatch()

  function handleClearCart() {
    dispatch(clearCart())
  }

  const total = items.reduce((sum, acc) => sum = sum + acc.price * acc.quantity, 0)

  const navigate = useNavigate()

  function handleClick() {
    navigate('/')
  }

  return (
    <div className='flex justify-center'>
      {(items.length > 0) ?
        <div className='flex flex-col justify-center items-center w-full max-w-5xl px-4'>
          <h2 className='font-bold text-xl sm:text-2xl my-6'>Shopping Cart</h2>
          <Suspense fallback={<h2>Loading...</h2>}>
            {items.map((item) => {
              return (
                <div key={item.id} className='flex flex-col border shadow-xl border-dashed border-[#D4A373] w-full mb-4'>
                  <CartItem item={item} />
                </div>
              )
            })}
          </Suspense>
          <div className='flex flex-col mt-6 items-center justify-center w-full'>
            <div className='flex justify-between sm:justify-around w-full bg-[#D4E3DE] border-[#D4A373] border border-dotted font-bold sm:text-lg p-2'>
              <h2 >Grand Total:</h2>
              <h2>${total.toFixed(2)}</h2>
            </div>
            <div className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 p-4  m-8 w-full items-center'>
              <button className='border w-full sm:w-auto p-6 py-2 rounded-sm  text-[#3e5c63] hover:text-red-700 font-bold' onClick={handleClearCart}>Clear Cart</button>
              <Link to={'/checkOut'} className='w-full sm:w-auto'>
                < button className='flex gap-1  items-center w-full sm:w-auto border p-6 py-2 justify-center font-bold bg-[#D4E3DE] rounded-sm hover:text-[#FF6202]'>Proceed to Buy <FaArrowRightFromBracket /> </button>
              </Link>
            </div>
          </div>
        </div > :
        <div className='flex flex-col gap-2 justify-center items-center m-10'>
          <h2 className='font-bold text-2xl sm:text-3xl lg:text-4xl'>Nothing in the cart</h2>
          <p>Add items to proceed</p>
          <button className='flex w-full sm:w-auto gap-1 mt-4 items-center justify-center font-bold border rounded-sm p-2 hover:scale-105 hover:text-[#FF6202]' onClick={handleClick}>Continue to Add Item <FaArrowRightFromBracket /> </button>
        </div>
      }
    </div>
  )
}

export default Cart