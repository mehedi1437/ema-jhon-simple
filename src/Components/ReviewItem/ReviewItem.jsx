import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ReviewItem = ({ product,handleRemoveFromCart }) => {
  const { quantity, name, img, price,id } = product;
  return (
    <div className="w-[571px] p-4 border border-[#95A0A7] flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img className="h-24 w-24" src={img} alt="" />
        <div>
        <h1>{name}</h1>
        <p>Price : <span className="text-orange-500">${price}</span> </p>
        <p>Quantity : <span className="text-orange-500"> {quantity}</span></p>
        </div>
      </div>
      
      <button onClick={()=>handleRemoveFromCart(id)}  className="text-2xl text-red-500 mr-4"><FaTrashAlt /></button>
    </div>
  );
};

export default ReviewItem;
