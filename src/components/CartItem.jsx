import React from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useDispatch } from 'react-redux'
import { addItem, decrement, removeItem } from "../utils/cartSlice";

function CartItem({ item }) {

  const dispatch = useDispatch()

  function handleRemove() {
    dispatch(removeItem())
  }

  function handlePlus() {
    dispatch(addItem(item))
  }

  function handleMinus() {
    dispatch(decrement(item))
  }


  return (
    <div className="flex justify-between items-center px-4">
      <div className="w-[120px] h-[120px]">
        <img src={item.thumbnail} alt={item.title} />
      </div>
      <div className="flex justify-between  w-[800px]">
        <div className="flex flex-col justify-center">
          <h4 className="font-bold text-xl">{item.title}</h4>
          <p>({item.shippingInformation})</p>
        </div>

        <div className="flex w-[250px] justify-between items-center">
          <div className="flex gap-1 items-center">
            <button type="button" className="flex items-center text-2xl" onClick={handleMinus}> <CiCircleMinus /> </button>
            <span className="font-bold">{item.quantity}</span>
            <button type="button" className="flex items-center text-2xl" onClick={handlePlus}> <CiCirclePlus /> </button>
          </div>

          <p className="font-bold text-lg">${item.price * item.quantity}</p>

          <button type="button" onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
