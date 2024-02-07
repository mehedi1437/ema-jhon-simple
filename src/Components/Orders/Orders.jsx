import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();

  const [cart, setCart] = useState(savedCart);
  const handleRemoveFromCart = (id) => {
    console.log(id);
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id)
  };
  return (
    <div className="shop-container grid grid-cols-[4fr,1fr]">
      <div className="product-container mx-auto lg:grid grid-cols-1 space-y-4 mt-20">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container bg-[#FFE0B3]">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Orders;
