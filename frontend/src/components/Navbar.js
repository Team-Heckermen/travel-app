import React, { useContext } from "react";
import { Link } from "react-router-dom";

import LightLogo from "../assets/images/light-mode/logo.png";
import DarkLogo from "../assets/images/dark-mode/logo.png";

import DarkSearch from "../assets/images/dark-mode/search_icon.svg";
import LightSearch from "../assets/images/light-mode/search_icon.svg";

import DarkUserimg from "../assets/images/dark-mode/default_user_img.svg";
import lightUserimg from "../assets/images/light-mode/default_user_img.svg";

import DarkModeIcon from "../assets/images/dark-mode/dark-mode.png";
import LightModeIcon from "../assets/images/light-mode/light-mode.png";

import AuthContext from "../context/AuthContext";

const Navbar = () => {
  let { user, logoutUser, themeIsDark, setThemeIsDark } = useContext(AuthContext);

  if(themeIsDark)
  {
    var Logo = DarkLogo;
    var Search = DarkSearch;
    var ModeIcon = DarkModeIcon;
    var DefaultUserImg = DarkUserimg;
    document.documentElement.style.setProperty('--main','#15202b');
    document.documentElement.style.setProperty('--antimain','white');
  }
  else
  {
    var Logo = LightLogo;
    var Search = LightSearch;
    var ModeIcon = LightModeIcon;
    var DefaultUserImg = lightUserimg;
    document.documentElement.style.setProperty('--main','white');
    document.documentElement.style.setProperty('--antimain','#15202b');
  }

  const guestLinks = () => (
    <>
      <Link to="/login" className="p-1">
        <button className="underline-btn">Log In</button>
      </Link>
      <Link to="/sign_up" className="p-1 mr-4">
        <button className="underline-btn">Sign Up</button>
      </Link>
    </>
  );

  const authLinks = () => (
    <>
      <Link className="navbar-link" to="/profile">
        <button className="underline-btn">Profile</button>
      </Link>
      <Link className="navbar-link mr-4" to="/" onClick={logoutUser}>
        <button className="underline-btn">Logout</button>
      </Link>
    </>
  );

  return (
    <div>
      <nav className="flex justify-between items-center text-black relative">
        {/* Logo, home, discussion and settings button */}
        <div className="flex items-center">
          <Link to="/" className="ml-3">
            <img src={Logo} className="ml-4 w-11 mr-0" />
          </Link>
          <div className="pr-8 md:block hidden mx-5">
            <Link className="navbar-link" to="/">
              <button className="underline-btn">Home</button>
            </Link>
            <Link className="navbar-link" to="/settings">
              <button className="underline-btn">Settings</button>
            </Link>
          </div>
          {/* Search Bar */}
          <div className="search_bar">
            <input
              className="navbar-search-input"
              id="search"
              type="text"
              placeholder="Search"
            />
            <div className="p-2 py-0">
              <button className="navbar-search-btn">
                <img src={Search} height="100%" width="100%" />
              </button>
            </div>
          </div>
        </div>
        <div className=" flex-grow mr-4">
            <button className="w-8 h-8 float-right" onClick={setThemeIsDark}><img src={ModeIcon} className="w-8 h-8 float-right"/></button>
        </div>
        <div className="pr-3 md:block hidden">
          {user ? authLinks() : guestLinks()}
        </div>
        {/* Button icon when the screen is small */}
        <div className="mr-8 cursor-pointer block md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
      </nav>
      <hr className="w-95% mx-auto m-0 p-0 border-gray-700" />
    </div>
  );
};

export default Navbar;
