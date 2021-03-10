/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import ProductBreakdownCharacteristic from './ProductBreakdownCharacteristic/ProductBreakdownCharacteristic.jsx';

const ProductBreakdown = ({ metaData }) => {
  const characteristcsArray = [];

  for (const [key, value] of Object.entries(metaData.characteristics)) {
    characteristcsArray.push(
      <div key={value.id}>
        <ProductBreakdownCharacteristic
          name={key}
          value={value.value}
        />
      </div>,
    );
  }

  return (
    characteristcsArray
  );
};

export default ProductBreakdown;
