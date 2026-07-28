import React from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useDispatch } from 'react-redux'
import { addItem, decrement, removeItem } from "../utils/cartSlice";

function CartItem({ item }) {

  const dispatch = useDispatch() //to send actions to redux reducers

  // handleRemove() will remove particular item from the cart
  function handleRemove() {
    dispatch(removeItem(item))
  }

  // handlePlus() will add quantity of a particular item in the cart
  function handlePlus() {
    dispatch(addItem(item))
  }

  // handlePlus() will decrease quantity of a particular item in the cart
  function handleMinus() {
    dispatch(decrement(item))
  }


  return (
    <div className="flex flex-col lg:flex-row justify-between gap-5 items-center p-4">
      <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] shrink-0">
        {/* image is loaded using lazy loading */}
        <img src={item.thumbnail} loading="lazy" alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center flex-1 gap-5 w-full">
        <div className="flex flex-col justify-center">
          <h4 className="font-bold text-center sm:text-left text-lg sm:text-xl">{item.title}</h4>
          <p className="text-center sm:text-left">({item.shippingInformation})</p>
        </div>

        <div className="flex w-full gap-4 sm:gap-8 sm:w-auto justify-between items-center">
          <div className="flex gap-1 items-center">
            <button type="button" className="flex items-center text-2xl hover:scale-110" onClick={handleMinus}> <CiCircleMinus /> </button>
            <span className="font-bold">{item.quantity}</span>
            <button type="button" className="flex items-center text-2xl hover:scale-110" onClick={handlePlus}> <CiCirclePlus /> </button>
          </div>
          <p className="font-bold text-lg">${item.price * item.quantity}</p>
          <button type="button" onClick={handleRemove} className="text-red-700 hover:scale-105">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
