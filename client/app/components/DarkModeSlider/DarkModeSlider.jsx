import React from 'react';
import './DarkModeSlider.css';

const DarkModeSlider = ({ setMode }) => (
  <div className="dark-switch-container">
    <i className="fas fa-adjust" />
    <label className="switch">
      <input type="checkbox" onChange={() => setMode()} />
      <span className="slider round" />
    </label>
  </div>
);

export default DarkModeSlider;
