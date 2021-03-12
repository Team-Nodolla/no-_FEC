import React from 'react';
import { getCharacteristicDescriptions } from '../../../../helperFunctions/helperFunctions.js';
import './ProductBreakdownCharacteristic.css';

const ProductBreakdownCharacteristic = ({ name, value }) => {
  const productCharsObj = getCharacteristicDescriptions(name);

  return (
    <div className="product-characteristic-container">
      <div className="product-characteristic-description">
        {name}
      </div>
      <div className="product-breakdown-slider-container">
        <label htmlFor="product-breakdown-slider-name" className="product-breakdown-label">
          <input type="range" min="1" max="5" value={value} name="product-breakdown-slider-name"
            className="product-breakdown-slider" readOnly
          />
        </label>
      </div>
      <div className="product-breakdown-details">
        <span className="product-characteristic-one">{productCharsObj.one}</span>
        <span className="product-characteristic-five">{productCharsObj.five}</span>
      </div>
    </div>
  );
};

export default ProductBreakdownCharacteristic;
