import React from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

function CartItem({ item }) {

  return (
    <div className="flex justify-between items-center border px-4">
      <div className="w-[150px] h-[150px]">
        <img src={item.thumbnail} alt={item.title} />
      </div>

      <div className="flex flex-col justify-center">
        <h4 className="font-bold text-xl">{item.title}</h4>
        <p>({item.shippingInformation})</p>
      </div>

      <div className="flex gap-1 items-center">
        <button type="button" className="flex items-center text-2xl"> <CiCircleMinus/> </button>
        <span className="">"Quantity"</span>
        <button type="button" className="flex items-center text-2xl"> <CiCirclePlus/> </button>
      </div>

      <p className="font-bold text-lg">${item.price}</p>

      <button type="button">Remove</button>
    </div>
  );
};

export default CartItem;
