import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../Context";

const Header = () => {
  let { cart } = useContext(ContextProvider);

  return (
    <div className="w-full bg-black h-[60px] text-white flex items-center justify-between px-5">
      <div className="text-xl  flex  items-center justify-center">
        {" "}
        <Link to="/"> Logo </Link>
      </div>{" "}
      <nav>
        <ul className="flex gap-5 text-sm">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/cart">
              Cart <span> ({cart.length})</span>{" "}
            </Link>
          </li>

          <li>Logout</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
