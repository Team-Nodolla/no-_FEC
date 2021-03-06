import React from 'react';
import propTypes from 'proptypes';

const QuantitySelector = ({ selectedSize, sizeQuantity, arraySkus }) => {
  if (arraySkus !== undefined) {
    const arrayOfSize = [];
    for (let i = 1; i <= sizeQuantity; i += 1) {
      arrayOfSize.push(i);
    }
    switch (selectedSize) {
      default:
        return (
          <div>
            <select>
              <option>Select A Quantity</option>
            </select>
          </div>
        );
      case selectedSize:
        return (
          <div>
            <select>
              <option>Select A Quantity</option>
              {arrayOfSize.map((quantity) => {
                return (
                  <option key={quantity} value={quantity}>{quantity}</option>
                )
              })}
            </select>
          </div>
        );
    }
  }

  return (
    <div />
  );
};

QuantitySelector.propTypes = {
  selectedSize: propTypes.string,
  sizeQuantity: propTypes.number,
  arraySkus: propTypes.array,
};

export default QuantitySelector;
