import React from "react";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  console.log(cart);
  for (const product of cart) {
    //   if(product.quantity === 0){
    //     product.quantity = 1;
    //   }
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (totalPrice * 7) / 100;
  const gtandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="bg-[#FFE0B3] p-10 space-y-5 sticky top-0">
      <h4 className="font-semibold text-2xl text-center">Order Summery</h4>
      <p>Seleted Items : {quantity}</p>
      <p>Total Price : ${totalPrice.toFixed(2)}</p>
      <p> Shipping Charge : ${totalShipping.toFixed(2)} </p>
      <p>Tax ${tax.toFixed(2)}</p>
      <p className="font-semibold text-xl ">
        Grand Total :$ {gtandTotal.toFixed(2)}{" "}
      </p>
    </div>
  );
};

export default Cart;
