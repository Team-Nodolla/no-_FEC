import React from 'react';
import { getCharacteristicDescriptions } from '../../../../helperFunctions/helperFunctions.js';

const ProductBreakdownCharacteristic = ({ name, value }) => {
  const productCharsObj = getCharacteristicDescriptions(name);

  return (
    <div className="product-characteristic-container">
      <div className="product-characteristic-description">
        {name}
      </div>
      <div className="product-slider-container">
        <input type="range" min="1" max="5" value={value} className="product-breakdown-slider" />
      </div>
      <div className="product-breakdown-details">
        {`${productCharsObj.one} ${productCharsObj.five}`}
      </div>
    </div>
  );
};

export default ProductBreakdownCharacteristic;
