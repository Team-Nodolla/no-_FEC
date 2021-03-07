import React, { useState, useEffect } from 'react';
import propTypes from 'proptypes';
import SizeSelector from './SizeSelector/SizeSelector.jsx';
import QuantitySelector from './QuantitySelector/QuantitySelector.jsx';
import './ProductCart.css';

const ProductCart = ({ selectedStyle }) => {
  if (selectedStyle !== undefined) {
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(null);
    const arrayOfSkus = Object.values(selectedStyle.skus);

    arrayOfSkus.unshift({
      quantity: null, size:'Select Size',
    });

    useEffect(() => {
      setSelectedSize(null);
    }, [selectedStyle]);

    const onSelectSize = (e) => {
      setSelectedSize(e.target.value);
      arrayOfSkus.forEach((item) => {
        if (item.size === e.target.value) {
          if (item.quantity >= 15) {
            setSelectedQuantity(15);
          } else {
            setSelectedQuantity(item.quantity);
          }
        }
      });
    };

    if (
      arrayOfSkus.length === 2
      && arrayOfSkus[0].quantity === null
      && arrayOfSkus[1].quantity === null) {
      return (
        <div>
          <h2>Out of Stock!</h2>
        </div>
      );
    }
    return (
      <div className="product-option-selectors">
        <div className="product-size-dropdown"><SizeSelector selectedSize={selectedSize} onSelectSize={onSelectSize} arraySkus={arrayOfSkus} /></div>
        <div className="product-quantity-dropdown">
          <QuantitySelector
            selectedSize={selectedSize}
            sizeQuantity={selectedQuantity}
            arraySkus={arrayOfSkus}
          />
        </div>
      </div>
    );
  }

  return (
    <div />
  );
};

ProductCart.propTypes = {
  selectedStyle: propTypes.object,
};

export default ProductCart;
