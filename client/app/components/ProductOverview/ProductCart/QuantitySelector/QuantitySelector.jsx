import React from 'react';
import '../SizeSelector/SizeSelector.css';

const switchOptions = () => {
}

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
            <form>
              <label htmlFor="no-quantity"></label>
                <select name="no-quantity"
                        className="product-dropdown-box">
                  <option>-</option>
                </select>
            </form>
          </div>
        );
      case null:
        return (
          <div>
            <form>
              <label htmlFor="no-quantity"></label>
                <select name="no-quantity"
                        className="product-dropdown-box">
                  <option>-</option>
                </select>
            </form>
          </div>
        );
      case selectedSize:
        return (
          <div>
            <form>
              <label htmlFor="quantity"></label>
                <select name="quantity" className="product-dropdown-box">
                  <option value={1}>1</option>
                  {arrayOfSize.map((quantity) => {
                    return (
                      <option key={quantity} value={quantity}>{quantity}</option>
                    )
                  })}
                </select>
            </form>
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
