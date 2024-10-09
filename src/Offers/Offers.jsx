

import React from 'react';
import "./Offers.css";
import exclucive_image from "../Assets/exclusive_image.png";
import arrow_icon from "../Assets/arrow.png"; // Include an arrow icon if needed

const Offers = () => {
  return (
    <div className='offers'>
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
        <img src={exclucive_image} alt="Exclusive Offers" />
      </div>
    </div>
  );
}

export default Offers;
