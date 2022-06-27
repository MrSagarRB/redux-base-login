import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { ContextProvider } from "../Context";

const Cart = () => {
  let { cart, setCart } = useContext(ContextProvider);

  return (
    <div className=" ">
      <div className=" h-[90%]  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-[50px] pt-[10px] place-items-center overflow-scroll ">
        {cart.map((prod) => {
          return (
            <SingleProduct
              prod={prod}
              key={prod.id}
              cart={cart}
              setCart={setCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
