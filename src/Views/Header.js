import React, { useState, useEffect } from 'react';
import './Header.css';

import sportShoe from '../assets/images/sportShoe.png';
import shopAll from '../assets/images/shopAll.png';
import shoeShadow from '../assets/images/shoeShadow.png';
import softPad from '../assets/images/softPad.png';
import adjustable from '../assets/images/adjustable.png';

const SCROLL_FACTOR = 0.12;

const Header = () => {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setTranslateY(-window.scrollY * SCROLL_FACTOR);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const style = {
    transform: `translateY(${translateY}px)`,
  };

  return (
    <header className="header">
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

          <div className="heroShoeWrap">
            <img
              src={sportShoe}
              alt="Sport Shoe"
              className="heroShoe"
              style={style}
            />
          </div>

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
