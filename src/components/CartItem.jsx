import React from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useDispatch } from 'react-redux'
import { removeItem } from "../utils/cartSlice";

function CartItem({ item }) {

  const dispatch = useDispatch()

  function handleRemove() {
    dispatch(removeItem())
  }

  return (
    <div className="flex justify-between items-center px-4">
      <div className="w-[120px] h-[120px]">
        <img src={item.thumbnail} alt={item.title} />
      </div>

      <div className="flex flex-col justify-center">
        <h4 className="font-bold text-xl">{item.title}</h4>
        <p>({item.shippingInformation})</p>
      </div>

      <div className="flex gap-8 items-center">
        <div className="flex gap-1 items-center">
          <button type="button" className="flex items-center text-2xl"> <CiCircleMinus /> </button>
          <span className="">"Quantity"</span>
          <button type="button" className="flex items-center text-2xl"> <CiCirclePlus /> </button>
        </div>

        <p className="font-bold text-lg">${item.price}</p>

        <button type="button" onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
