import React, { useState } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Sagar from "./Components/Sagar";
import { CartContext } from "./Context";
import Context from "./Context";
function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className=" h-screen relative">
      <Context >
        <BrowserRouter>
          <div className=" sticky top-0">
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sag" element={<Sagar />} />
          </Routes>
          <div className="w-full absolute bottom-0">
            <Footer />
          </div>
        </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
