import React from "react";
import "./Offers.css";
import arrow_icon from "../Assets/arrow.png";
import logo2 from "../Assets/New folder/product_14.png";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h2>Exclusive</h2>
        <h2>Offers For You</h2>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <div className="offers-check-btn">
          <span>Check Now</span>
          <img src={arrow_icon} alt="Arrow Icon" />
        </div>
      </div>
      <div className="offers-right">
        <img src={logo2} alt="Exclusive Offers" />
      </div>
    </div>
  );
};

export default Offers;
