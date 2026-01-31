import React from 'react';
import './NavBar.css';

import logo from '../assets/images/logo.svg';
import cart from '../assets/images/cart.svg';
import profile from '../assets/images/profile.svg';
import heart from '../assets/images/heartEmpty.svg';

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="navBarInner">
        <img src={logo} alt="Logo" className="logo" />

        <ul className="navLinks">
          <li>Women</li>
          <li>Men</li>
          <li>Kids</li>
          <li>Classic</li>
          <li>Sport</li>
          <li>Sale</li>
        </ul>

        <div className="navIcons">
          <img src={heart} alt="Wishlist" className="navIcon" />
          <img src={cart} alt="Cart" className="navIcon" />
          <img src={profile} alt="Profile" className="navIcon" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
