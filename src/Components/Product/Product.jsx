import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";


const Product = ({ product, handleAddTOCart }) => {
  const { quantity, name, img, price, seller, ratings } = product;

  return (
    <div className="">
      <div className="card w-72 bg-base-100 relative h-[530px]  m-4">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="m-6 space-y-3">
          <h2 className="card-title mb-2 ">{name}!</h2>
          <p>Seller : {seller}</p>
          <p>Price : $ {price}</p>
          <p>Rating : {ratings}</p>
          
        </div>
        <button
          onClick={() => handleAddTOCart(product)}
          className="btn hover:bg-[#e4711f] absolute bottom-0 w-full  bg-[#FFE0B3]   "
        >
          Add to cart <HiOutlineShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default Product;
