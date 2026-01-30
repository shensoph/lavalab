// src/Views/Header.js
import React from 'react';
import './Header.css';

import logo from '../assets/images/logo512.png';
import sportShoe from '../assets/images/sportShoe.png';
import shopAll from '../assets/images/shopAll.png';
import shoeShadow from '../assets/images/shoeShadow.png';
import softPad from '../assets/images/softPad.png';
import adjustable from '../assets/images/adjustable.png';

const Header = () => {
  return (
    <header className="header">
      {/* Nav */}
      <nav className="nav">
        <img src={logo} alt="Logo" className="logo" />

        <ul className="navLinks">
          <li>Women</li>
          <li>Men</li>
          <li>Kids</li>
          <li>Classic</li>
          <li>Sport</li>
          <li>Sale</li>
        </ul>
      </nav>

      {/* Hero */}
      <div className="hero">
        {/* Corner labels */}
        <img
          src={adjustable}
          alt="Adjustable"
          className="cornerLabel topLeft"
        />

        <img
          src={softPad}
          alt="Soft Pad"
          className="cornerLabel bottomRight"
        />

        {/* Center visuals */}
        <div className="heroCenter">
          <img
            src={shopAll}
            alt="Shop All Background"
            className="shopAllText"
          />

          <img
            src={sportShoe}
            alt="Sport Shoe"
            className="heroShoe"
          />

          <img
            src={shoeShadow}
            alt="Shoe Shadow"
            className="shoeShadow"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
