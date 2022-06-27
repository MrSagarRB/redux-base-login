import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { ContextProvider } from "../Context";

const Cart = () => {
  let { cart, setCart } = useContext(ContextProvider);
  let [amt,setAmt]= useState();



  useEffect(()=>{
    setAmt(cart.reduce((acc,curr)=>acc + Number(curr.price),0));
  },[cart])

  console.log(amt);


  return (
    <div className=" h-screen">
      <div className="p-10">
        <p className="text-2xl">Your Cart </p>
        <p className="text-xl">
          Total item : <span> {cart.length}</span>{" "}
        </p>
        <p> Total Ammount:  {amt} Rs.</p>
      </div>
      <div className=" h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-[50px] pt-[10px] place-items-center overflow-y-scroll ">
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
