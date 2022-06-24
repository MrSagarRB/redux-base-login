import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

const Login = () => {
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [pass, setPass] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        email: email,
        pass: pass,
        logged: true,
      })
    );
  };

  return (
    <div className="w-full h-screen bg-slate-300 flex justify-center items-center">
      <form
        className=" flex gap-5 flex-col border-2 h-[40%] w-[400px] justify-center px-10 rounded-lg"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1>Login Here</h1>
        <input
          type="text"
          placeholder="Enter Name"
          className="px-2 py-1 rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Email"
          className="px-2 py-1 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="px-2 py-1 rounded-md"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit" className="bg-red-400 px-2 py-1 rounded-md">
          {" "}
          Login{" "}
        </button>
      </form>
    </div>
  );
};

export default Login;
