import React, { useState } from "react";
import "./Nabebar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import menu2 from "../Assets/menu.png";

const Nabebar = () => {
  const [menu, setMenu] = useState("shop");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>

      <ul className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens">Men</Link>
          {menu === "mens" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens">Youths </Link>
          {menu === "womens" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Children</Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>

      <div className="menu-icon" onClick={toggleMobileMenu}>
        <img className="newMenu" src={menu2} alt="menu" />
      </div>

      {isMobileMenuOpen && (
        <div className={`side-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <ul>
            <li onClick={() => setMenu("shop")}>
              <Link to="/" onClick={toggleMobileMenu}>
                Shop
              </Link>
              {menu === "shop" && <hr />}
            </li>
            <li onClick={() => setMenu("mens")}>
              <Link to="/mens" onClick={toggleMobileMenu}>
               Men
              </Link>
              {menu === "mens" && <hr />}
            </li>
            <li onClick={() => setMenu("womens")}>
              <Link to="/womens" onClick={toggleMobileMenu}>
              Youths 
              </Link>
              {menu === "womens" && <hr />}
            </li>
            <li onClick={() => setMenu("kids")}>
              <Link to="/kids" onClick={toggleMobileMenu}>
              Children
              </Link>
              {menu === "kids" && <hr />}
            </li>
          </ul>
          <Link to="/login" onClick={toggleMobileMenu}>
            <button>Login</button>
          </Link>
          <div onClick={toggleMobileMenu} className="divmobilemenu">
            <Link to="/cart">
              <img src={cart_icon} alt="Cart" />
            </Link>
            <div className="nav-cart-count-menu">0</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nabebar;
