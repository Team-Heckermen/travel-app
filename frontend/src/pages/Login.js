import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <div>
      <title>Venplore - Sign in</title>
      <div className="flex">
        <div className="sign-in-container">
          <div className="h-2 bg-blue-400 rounded-t-md"></div>
          <form className="px-8 py-6" onSubmit={loginUser}>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="sign-in-input"
              name="email"
              required
            />
            <label className="block mt-3 font-semibold">Password</label>
            <input
              type="password"
              placeholder="password123"
              className="sign-in-input"
              name="password"
              minLength="7"
              required
            />
            <div className="flex justify-between items-baseline">
              <button className="primary-btn" type="submit">
                Login
              </button>
              <Link
                to="/reset-password"
                className="text-sm hover:text-blue-500"
              >
                Forgot password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
