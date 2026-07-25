import React from 'react'
import CartItem from './CartItem'
import { FaArrowRightFromBracket } from "react-icons/fa6"

function Cart({ items }) {
  console.log(items)
  const itemList = items.slice(0, 10)
  console.log(itemList)
  return (
    <>
      {(itemList.length > 0) ?
        <div>
          <h2 className='font-bold text-2xl mb-4'>Shopping Cart</h2>
          {itemList.map((item) => {
            return (
              <div key={item.id} className='flex flex-col mb-4'>
                < CartItem key={item.id} item={item} />
              </div>
            )
          })}
          <div className='flex flex-col items-center justify-center'>
            <div >
              <h2 >Grand Total:</h2>
            </div>
            < button className='flex gap-1 mt-4 items-center border p-2 py-1 justify-center font-bold'>Palce order <FaArrowRightFromBracket /> </button>
          </div>
        </div > :
        <div className='flex flex-col gap-2 justify-center items-center m-10'>
          <h2 className='font-bold text-4xl'>Nothing in the cart</h2>
          <p>Add items to proceed</p>
          <button className='flex gap-1 mt-4 items-center justify-center font-bold'>Continue to Add Item <FaArrowRightFromBracket /> </button>
        </div>
      }
    </>
  )
}

export default Cart