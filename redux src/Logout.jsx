import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";

const Logout = () => {
  let [count, setCount] = useState(0);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
    alert("Logeed Out Successfully");
  };

  let autoLogout = setTimeout(handleLogout, 10000);

  console.log(count);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="text-2xl flex flex-col items-center gap-5">
        <h1>
          {" "}
          Welcome{" "}
          <span className="text-purple-500 uppercase"> {user.name} </span>
          <br />
          Your Email is <span className="text-red-500">: {user.email}</span>
        </h1>
        <button
          className="border-2 px-7 py-1 bg-black hover:opacity-80 text-white"
          onClick={(e) => handleLogout(e)}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
