import React from 'react';

const Cart = ({cart}) => {

    let total = 0;

    for (const product of cart){
        total = total + product.price;
    }
    return (
        <div className='bg-[#FFE0B3] p-10 space-y-5'>
              <h4 className='font-semibold text-2xl text-center'>Order Summery</h4>
        <p>Seleted Items : {cart.length}</p>
        <p>Total Price : ${total}</p>
        <p>Total Shipping Charge : $  </p>
        <p>Tax</p>
        <p className='font-semibold text-xl '>Grand Total : </p>

        </div>
    );
};

export default Cart;