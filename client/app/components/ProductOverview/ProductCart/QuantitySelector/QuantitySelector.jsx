import React from 'react';
import '../SizeSelector/SizeSelector.css';

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
            <select className="product-dropdown-box">
              <option>-</option>
            </select>
          </div>
        );
      case null:
        return (
          <div>
            <select className="product-dropdown-box">
              <option>-</option>
            </select>
          </div>
        );
      case selectedSize:
        return (
          <div>
            <select className="product-dropdown-box">
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
