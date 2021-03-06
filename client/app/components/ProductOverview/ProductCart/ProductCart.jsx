import React from 'react';

const ProductCart = ({ selectedStyle }) => {
  if (selectedStyle !== undefined) {
    const arrayOfSkus = Object.values(selectedStyle.skus);
    return (
      <span>
        <select>
          <option>Select A Size</option>
          {arrayOfSkus.map((skus) => {
            return (
              <option key={arrayOfSkus.indexOf(skus)} value={skus.size}>{skus.size}</option>
            )
          })}
        </select>
        <select>
          <option>Select A Quantity</option>
          {arrayOfSkus.map((skus) => {
            return (
              <option key={arrayOfSkus.indexOf(skus)} value={skus.quantity}>{skus.quantity}</option>
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
