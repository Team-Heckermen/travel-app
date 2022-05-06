import React from "react";
import { Link } from "react-router-dom";

import main_img from "../assets/images/home page/home_page_main.png";
import s1_img from "../assets/images/home page/home_page_s1.png";
import s2_img from "../assets/images/home page/home_page_s2.png";
import s3_img from "../assets/images/home page/home_page_s3.png";

const Home = () => {
  return (
    <div className="w-90% mx-auto">
      <div className="mt-6 md:flex items-center justify-center">
        <div className="md:w-47.5% float-left mr-5%">
          <h1 className="md:w-95% heading_font text-4xl md:text-6xl mb-2"><span>PLAN</span> YOUR NEXT <span>OUTING</span> WITH EASE</h1>
          <p className="w-95% mb-4 text-xl md:text-2xl">No matter if it is an <span>friendly</span> outing, <span>corporate</span>, or a <span>family</span> one, we got you covered.</p>
          <p className="heading_font text-2xl md:text-4xl mx-auto mb-6"><Link to="/login">JOIN  US  NOW!</Link></p>
        </div>
        <img src={main_img} className="rounded-lg md:w-47.5% mb-6" alt="" />
      </div>
      <hr className="mb-6 mx-auto w-95%"/>
      <div>

        <div className="">
          <img src={s1_img} className="" alt="" />
          <p>Get to know the latest events near you</p>
        </div>
        
        <div>
          <img src={s2_img} className="" alt="" />
          <p>discover according to your preference</p>
        </div>
        
        <div>
          <img src={s3_img} className="" alt="" />
          <p>Get rid of the hassle of finding places to visit</p>
        </div>

        <div>
          <h2 className="heading_font">All this and more, for FREE!</h2>
        </div>
      
      </div>
    </div>
  );
};

export default Home;
