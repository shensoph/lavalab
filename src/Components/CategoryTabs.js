import React from 'react';
import './CategoryTabs.css';

const CategoryTabs = () => {
  return (
    <div className="tabs-container">
        <button className="tab-btn arrivals">NEW ARRIVALS</button>
        <button className="tab-btn trending">WHAT'S TRENDING</button>
    </div>
  );
};

export default CategoryTabs;
