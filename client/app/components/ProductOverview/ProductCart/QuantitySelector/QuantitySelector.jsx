import React from 'react';

const QuantitySelector = ({ selectedSize, sizeQuantity, arraySkus }) => {
  if (arraySkus !== undefined) {
    const arrayOfSize = [];
    for (let i = 2; i <= sizeQuantity; i += 1) {
      arrayOfSize.push(i);
    }
    switch (selectedSize) {
      case "Select Size":
        return (
          <div>
            <select>
              <option>-</option>
            </select>
          </div>
        );
      case null:
        return (
          <div>
            <select>
              <option>-</option>
            </select>
          </div>
        );
      case selectedSize:
        return (
          <div>
            <select>
              <option value={1}>1</option>
              {arrayOfSize.map((quantity) => {
                return (
                  <option key={quantity} value={quantity}>{quantity}</option>
                )
              })}
            </select>
          </div>
        );
      default:
        return (
          <div />
        );
    }
  }
};

export default QuantitySelector;
