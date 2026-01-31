import React from 'react';
import './NavBar.css';

import logo from '../assets/images/logo512.png';

const NavBar = () => {
  return (
    <nav className="navBar">
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
  );
};

export default NavBar;
