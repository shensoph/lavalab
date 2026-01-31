import React,{useContext,useEffect,useRef,useState} from 'react';
import './NavBar.css';

import logo from '../assets/images/logo.svg';
import cart from '../assets/images/cart.svg';
import profile from '../assets/images/profile.svg';
import heart from '../assets/images/heartEmpty.svg';
import {ShopContext} from '../context/ShopContext';

const NavBar = ({cartRef,hasBannerAbove}) => {
  const shop = useContext(ShopContext);
  const cartCount = shop?.cartCount ?? 0;

  const [isCartMenuOpen,setIsCartMenuOpen] = useState(false);
  const cartMenuRef = useRef(null);

  const toggleCartMenu = () => setIsCartMenuOpen((prev) => !prev);
  const closeCartMenu = () => setIsCartMenuOpen(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if(e.key === 'Escape') closeCartMenu();
    };

    const onMouseDown = (e) => {
      if(!isCartMenuOpen) return;
      const el = cartMenuRef.current;
      if(!el) return;
      if(!el.contains(e.target)) closeCartMenu();
    };

    document.addEventListener('keydown',onKeyDown);
    document.addEventListener('mousedown',onMouseDown);

    return () => {
      document.removeEventListener('keydown',onKeyDown);
      document.removeEventListener('mousedown',onMouseDown);
    };
  },[isCartMenuOpen]);

  const onClearCart = () => {
    shop?.clearCart();
    closeCartMenu();
  };

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

          <div className="navIconWrap navCartWrap" ref={cartMenuRef}>
            <button
              className="navIconButton"
              onClick={toggleCartMenu}
              type="button"
              aria-label="Open cart menu"
              aria-expanded={isCartMenuOpen}
            >
              <img ref={cartRef} src={cart} alt="Cart" className="navIcon" data-cart-icon />
            </button>

            {cartCount > 0 ? <span className="navBadge">{cartCount}</span> : null}

            {isCartMenuOpen && cartCount > 0 ? (
              <div className="cartMenu" role="menu" aria-label="Cart menu">
                <button className="cartMenuAction" onClick={onClearCart} type="button">
                  Clear cart
                </button>
              </div>
            ) : null}
          </div>

          <div className="navIconWrap">
            <img src={profile} alt="Profile" className="navIcon" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
