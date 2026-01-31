import React from 'react';
import './Banner.css';

const Banner = ({ onDismiss }) => {
  return (
    <div className="banner" role="banner">
      <p className="banner-text">New here? Save 20% with code: YR24</p>
      <button
        type="button"
        className="banner-close"
        aria-label="Dismiss banner"
        onClick={onDismiss}
      >
        ×
      </button>
    </div>
  );
};

export default Banner;
