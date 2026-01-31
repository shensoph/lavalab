import React from 'react';
import './CategoryTabs.css';

const CategoryTabs = () => {
  return (
    <div class="tabs-container">
        <button class="tab-btn arrivals">NEW ARRIVALS</button>
        <button class="tab-btn trending">WHAT'S TRENDING</button>
    </div>
  );
};

export default CategoryTabs;
