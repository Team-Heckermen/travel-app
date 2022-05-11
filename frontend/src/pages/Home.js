import React from "react";
import { Link } from "react-router-dom";

import main_img from "../assets/images/home page/home_page_main.png";
import s1_img from "../assets/images/home page/home_page_s1.jpg";
import s2_img from "../assets/images/home page/home_page_s2.jpg";
import s3_img from "../assets/images/home page/home_page_s3.jpg";

const Home = () => {
  return (
    <div className="w-90% mx-auto">
      <div className="mt-6 md:flex items-center justify-center">
        <div className="md:w-47.5% float-left mr-5%">
          <h1 className="md:w-95% heading_font text-4xl md:text-6xl mb-2">
            <span>PLAN</span> YOUR NEXT <span>OUTING</span> WITH EASE
          </h1>
          <p className="w-95% mb-4 text-xl md:text-2xl">
            No matter if it is an <span>friendly</span> outing,{" "}
            <span>corporate</span>, or a <span>family</span> one, we got you
            covered.
          </p>
          <p className="heading_font text-2xl md:text-4xl mx-auto mb-6">
            <Link to="/login">JOIN US NOW!</Link>
          </p>
        </div>
        <img src={main_img} className="rounded-lg md:w-47.5% mb-6" alt="" />
      </div>
      <hr className="mb-6 mx-auto w-95%" />
      <div className="md:flex mb-6">
        <div className="w-100% md:w-22% md:mr-4%">
          <img src={s1_img} className="w-100% rounded-lg" alt="" />
          <p className="mt-2 mb-5 md:mt-0 md:mb-0 body_font text-center">
            Get to know the <span>latest events</span> near you.
          </p>
        </div>

        <div className="w-100% md:w-22% md:mr-4%">
          <img src={s2_img} className="w-100% rounded-lg" alt="" />
          <p className="mt-2 mb-5 md:mt-0 md:mb-0 body_font text-center">
            discover according to <span>your preference.</span>
          </p>
        </div>

        <div className="w-100% md:w-22% md:mr-4%">
          <img src={s3_img} className="w-100% rounded-lg" alt="" />
          <p className="mt-2 mb-6 md:mt-0 md:mb-0 body_font text-center">
            Get <span>rid</span> of the <span>hassle</span> of finding{" "}
            <span>places</span> to visit.
          </p>
        </div>

        <div className="w-100% md:w-22%">
          <h2 className=" heading_font text-6xl md:text-right text-center">
            ALL THIS AND MORE, FOR <span>FREE!</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
