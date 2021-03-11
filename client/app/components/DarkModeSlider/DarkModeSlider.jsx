import React from 'react';
import './DarkModeSlider.css';

const DarkModeSlider = ({ setMode, darkMode }) => (
  <div className="dark-switch-container">
    <i className={`fas fa-adjust ${darkMode ? 'dark-slider-icon' : ''}`} />
    <label className="switch">
      <input type="checkbox" onChange={() => setMode()} />
      <span className="slider round" />
    </label>
  </div>
);

export default DarkModeSlider;
