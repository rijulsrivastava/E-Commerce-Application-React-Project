import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

function CheckOut() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const items = useSelector((state) => state.cart.items);

  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
  })

  function handleInput(input, field) {
    setUserInfo({ ...userInfo, [field]: input });
  }

  const [ordered, setOrdered] = useState(false)

  function handlePlaceOrder() {
    dispatch(clearCart())
    setOrdered(true)
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }

  if (ordered == true) {
    return (
      <div className="flex flex-col justify-center items-center gap-1 text-center mt-15 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold">Order Placed!</h2>
        <p>ThankYou customer for your purchase</p>
      </div>
    )
  }

  const total = items.reduce((sum, acc) => sum = sum + acc.price * acc.quantity, 0)

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 min-h-screen w-full py-8 pt-10 gap-8">
      <h2 className="text-3xl font-bold">Checkout</h2>
      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-16  w-full max-w-6xl">
        <div className="flex flex-col border-[#D4A373] items-center w-full sm:w-[450px] lg:w-[40%] rounded-lg border p-5">
          <h2 className="text-2xl self-start pb-5">Shipping Details</h2>
          <form className="flex flex-col w-full text-md gap-4 text-base sm:text-lg">
            <input type="text" onChange={(e) => handleInput(e.target.value, 'fullName')} className="border-2 w-full rounded-md px-2 py-0.5 outline-none border-[#D4E3DE] focus:border-[#FF6202] focus:border" value={userInfo.fullName} placeholder="enter full name" />
            <input type="email" onChange={(e) => handleInput(e.target.value, 'email')} placeholder="Enter email" className="border-2  w-full rounded-md border-[#D4E3DE] outline-none focus:border-[#FF6202] focus:border px-2 py-0.5" value={userInfo.email} />
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" onChange={(e) => handleInput(e.target.value, 'city')} placeholder="Enter city" className="border-2 w-full px-2 py-0.5 rounded-md border-[#D4E3DE] focus:border-[#FF6202] focus:border outline-none" value={userInfo.city} />
              <input type="text" onChange={(e) => handleInput(e.target.value, 'zipCode')} placeholder="Enter ZIP code" className="border-2  w-full px-2 rounded-md border-[#D4E3DE] focus:border-[#FF6202] focus:border outline-none py-0.5" value={userInfo.zipCode} />
            </div>
            <input type="text" onChange={(e) => handleInput(e.target.value, 'address')} placeholder="Enter address" className=" w-full border-2 rounded-md border-[#D4E3DE] outline-none px-2 focus:border-[#FF6202] focus:border py-0.5" value={userInfo.address} />
            <input type="number" onChange={(e) => handleInput(e.target.value, 'phone')} placeholder="Enter phone number" className=" w-full border-2 rounded-md border-[#D4E3DE] outline-none px-2 py-0.5 focus:border-[#FF6202] focus:border" value={userInfo.phone} />
          </form>
        </div>
        <div className="flex border-[#D4A373] flex-col justify-between items-center rounded-lg w-full lg:flex-1 min-h-[300px] border p-4">
          <div className="flex flex-col items-center w-full">
            <h2 className="text-2xl font-semibold mb-4">Order Summary </h2>
            <ul className="w-full">
              {items.map((item) => (
                <li key={item.id} className="flex py-1 justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">{item.title} x {item.quantity}</h3>
                  </div>
                  <div className="font-semibold text-sm sm:text-base">${item.price * item.quantity}</div>
                </li>
              ))
              }
            </ul>
            <div className='flex justify-between w-full font-semibold border-t-2 border-dotted mt-6 pt-1'>
              <h2 >Grand Total:</h2>
              <h2>${total.toFixed(2)}</h2>
            </div>
          </div>
          <div className="flex justify-end mt-6 w-full">
            <button onClick={handlePlaceOrder} className="px-4 py-1 w-full sm:w-auto hover:scale-105 border bg-[#D4E3DE] rounded-lg hover:text-[#FF6202] text-base sm:text-lg">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut;
