import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart,setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddTOCart = (product) => {
    console.log(product);
    const newCart = [...cart,product];
    setCart(newCart);
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
      <Cart cart={cart}/>
      </div>
    </div>
  );
};

export default Shop;
