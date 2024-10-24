

import React from 'react';
import './Hero.css';
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/books/logo2.jpeg";
import logo from "../Assets/books/logo.png";

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div className="hero-collections">
                <div className="hero-hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt="Hand Icon" />
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
            <img src={logo} alt="Hero Image" />
        </div>
    </div>
  );
}

export default Hero;
