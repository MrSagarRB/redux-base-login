import React,{useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
    let [cart,setCart]=useState([])
  return (
    <div className=" h-screen relative">
      <div className=" sticky top-0">
        <Header />{" "}
      </div>
      {/* <h1>Welcome to React Router!</h1> */}
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}  />} />
      </Routes>
      <div className="  w-full  absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default App;
