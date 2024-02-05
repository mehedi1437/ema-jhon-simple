import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // Step-1 :get _id
    for (const _id in storedCart) {
      // Step-2 : get the full product by using this _id
      const addedProduct = products.find((product) => product.id === _id);
      // console.log(addedProduct);
      // Step-4: get quantity of the addedProduct and update the quantity
      if (addedProduct) {
        const quantity = storedCart[_id];
        addedProduct.quantity = quantity;
        //  Step-4: save the addedProduct to the  new array savedcart
        savedCart.push(addedProduct);
      }
      // console.log('added product with quantity',addedProduct);
    }
    // Step-5:Update the cart
    setCart(savedCart);
  }, [products]);

  const handleAddTOCart = (product) => {
    // console.log(product);

    let newCart = [];

    // const newCart = [...cart, product];
    // if product  doesn't exist ,then set quantity = 1
    // if exist update the quantity by 1
    const exist = cart.find((pd) => pd.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity = exist.quantity + 1;
      const remaining= cart.filter(pd=>pd.id!==product.id);
      newCart=[...remaining,exist];
    }

    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="shop-container grid grid-cols-[4fr,1fr]">
      <div className="product-container ml-10 lg:grid grid-cols-3 mt-20">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddTOCart={handleAddTOCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container bg-[#FFE0B3]">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
