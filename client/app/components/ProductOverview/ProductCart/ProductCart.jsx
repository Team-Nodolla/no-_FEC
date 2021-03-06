import React, { useState, useEffect } from 'react';
import SizeSelector from './SizeSelector/SizeSelector.jsx';
import QuantitySelector from './QuantitySelector/QuantitySelector.jsx';
import './ProductCart.css';

const ProductCart = ({ selectedStyle }) => {
  if (selectedStyle !== undefined) {
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(null);
    const arrayOfSkus = Object.values(selectedStyle.skus);

    useEffect(() => {
      setSelectedSize(null);
    }, [selectedStyle]);

    const onSelectSize = (e) => {
      setSelectedSize(e.target.value);
      arrayOfSkus.forEach((item) => {
        if (item.size === e.target.value) {
          setSelectedQuantity(item.quantity);
        }
      });
    };

    if (
      arrayOfSkus.length === 1
      && arrayOfSkus[0].quantity === null
      && arrayOfSkus[0].size === null) {
      return (
        <div>
          <h1>Out of Stock!</h1>
        </div>
      );
    }

    return (
      <div className="product-option-selectors">
        <SizeSelector onSelectSize={onSelectSize} arraySkus={arrayOfSkus} />
        <QuantitySelector
          selectedSize={selectedSize}
          sizeQuantity={selectedQuantity}
          arraySkus={arrayOfSkus}
        />
      </div>
    );
  }

  // return (
  //   <div />
  // );
};

export default ProductCart;
