import React from 'react';

const ProductCart = ({ selectedStyle }) => {
  if (selectedStyle !== undefined) {
    const arrayOfSkus = Object.values(selectedStyle.skus);
    return (
      <span>
        <select value="-">
          <option>Select A Size</option>
          {arrayOfSkus.map((skus) => {
            return (
              <option value={skus.size}>{skus.size}</option>
            )
          })}
        </select>
        <select value="-">
          <option>Select A Quantity</option>
          {arrayOfSkus.map((skus) => {
            return (
              <option value={skus.quantity}>{skus.quantity}</option>
            )
          })}
        </select>
      </span>
    );
  }

  return (
    <div />
  );
};

export default ProductCart;
