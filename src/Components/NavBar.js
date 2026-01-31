import React,{useContext} from 'react';
import './NavBar.css';

import logo from '../assets/images/logo.svg';
import cart from '../assets/images/cart.svg';
import profile from '../assets/images/profile.svg';
import heart from '../assets/images/heartEmpty.svg';
import {ShopContext} from '../context/ShopContext';

const NavBar = ({cartRef,hasBannerAbove}) => {
  const shop = useContext(ShopContext);
  const cartCount = shop?.cartCount ?? 0;

  return (
    <nav className={`navBar ${hasBannerAbove ? 'navBar--bannerAbove' : ''}`}>
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
        <div className="navIconWrap">
          <img src={heart} alt="Wishlist" className="navIcon" />
        </div>


          <div className="navIconWrap">
            <img ref={cartRef} src={cart} alt="Cart" className="navIcon" data-cart-icon />
            {cartCount > 0 ? <span className="navBadge">{cartCount}</span> : null}
          </div>

          <img src={profile} alt="Profile" className="navIcon" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
