import React from 'react';
import './Hero.css';
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/New folder/product_16.png";

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div className="hero-collections">
                <div className="hero-hand-icon">
                    <p>New</p>
                    <img src={hero_img} alt="Hand Icon" />
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
            </div>
            <div className="hero-latest-btn">
                <span>Latest Collection</span>
                <img src={arrow_icon} alt="Arrow Icon" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_img} alt="Hero Image" />
        </div>
    </div>
  );
}

export default Hero;
