import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  let { user, authTokens } = useContext(AuthContext);
  return (
    <div>
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/login">Login</Link>
      <span> | </span>
      <Link to="/restricted">Restricted Page</Link>

      {user && <p>Hello, {user.username}</p>}
    </div>
  );
};

export default Navbar;
