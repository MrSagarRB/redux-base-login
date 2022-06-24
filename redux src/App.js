import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Login";
import Logout from "./Logout";

const App = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      <div>{user ? <Logout /> : <Login />} </div>
    </div>
  );
};

export default App;
