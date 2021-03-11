import React from 'react';
import './DarkModeSlider.css';

const DarkModeSlider = () => (
  <div className="dark-switch-container">
    <i className="fas fa-adjust" />
    <label className="switch">
      <input type="checkbox" />
      <span className="slider round" />
    </label>
  </div>
);

export default DarkModeSlider;
