import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function CheckOut() {

  const dispatch = useDispatch()
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
    setOrdered(true)
  }

  if (ordered == true) {
    return (
      <div className="flex flex-col justify-center items-center gap-1 mt-15">
        <h2 className="text-4xl">Order Placed!</h2>
        <p>ThankYou customer for your purchase</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center w-full pt-10 gap-8">
      <h2 className="text-3xl font-bold">Checkout</h2>
      <div className="flex flex-wrap justify-center gap-20 w-full">
        <div className="flex flex-col items-center w-fit border p-6 pt-1">
          <h2 className="text-2xl self-start pb-4">Shipping Details</h2>
          <form className="flex flex-col text-md gap-4 text-lg">
            <input type="text" onChange={(e) => handleInput(e.target.value, 'fullName')} className="border px-2 py-0.5" value={userInfo.fullName} placeholder="enter full name" />
            <input type="email" onChange={(e) => handleInput(e.target.value, 'email')} placeholder="Enter email" className="border px-2 py-0.5" value={userInfo.email} />
            <div className="flex gap-4">
              <input type="text" onChange={(e) => handleInput(e.target.value, 'city')} placeholder="Enter city" className="border px-2 py-0.5" value={userInfo.city} />
              <input type="text" onChange={(e) => handleInput(e.target.value, 'zipCode')} placeholder="Enter ZIP code" className="border px-2 py-0.5" value={userInfo.zipCode} />
            </div>
            <input type="text" onChange={(e) => handleInput(e.target.value, 'address')} placeholder="Enter address" className="border px-2 py-0.5" value={userInfo.address} />
            <input type="number" onChange={(e) => handleInput(e.target.value, 'phone')} placeholder="Enter phone number" className="border px-2 py-0.5" value={userInfo.phone} />
          </form>
        </div>
        <div className="flex flex-col justify-between items-center w-[40%] border p-4">
          <h2 className="text-2xl font-semibold mb-4">Order Summary </h2>
          <ul>
            {items.map((item) => (
              <li key={item.id} className="py-4 w-[100%] border flex justify-between items-center">
                <div>
                  <h3 className="">{item.title}</h3>
                </div>
                <div className="text-lg">${item.price}</div>
              </li>
            ))
            }
          </ul>
          <div className="text-right">
            <button onClick={handlePlaceOrder} className="px-4 py-1 hover:scale-105 border text-lg">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut;
