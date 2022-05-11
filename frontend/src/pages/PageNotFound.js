import React, { useContext } from "react";
import DarkMessage from "../assets/images/dark-mode/404page.png";
import LightMessage from "../assets/images/light-mode/404page.png";
import AuthContext from "../context/AuthContext";

const PageNotFound = () => {
  let {themeIsDark} = useContext(AuthContext);
  if(themeIsDark)
  {
    var Message = DarkMessage;
  }
  else
  {
    var Message = LightMessage;
  }

  var { innerWidth: width, innerHeight: height } = window;
  var mheight = height - 130;
  height = (width/16)*9;
  if(height>mheight)
  {
    height = mheight;
    width = (height/9)*16;
  }
  return (
    <div>
      <title>Venplore - page not found</title>
      <img src={Message} width={width} className="mx-auto" />
    </div>
  );
};

export default PageNotFound;