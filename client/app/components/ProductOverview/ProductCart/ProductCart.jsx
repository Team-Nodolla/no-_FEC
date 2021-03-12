import React, { useState, useEffect } from 'react';
import axios from 'axios';
import propTypes from 'proptypes';
import SizeSelector from './SizeSelector/SizeSelector.jsx';
import QuantitySelector from './QuantitySelector/QuantitySelector.jsx';
import './ProductCart.css';

const ProductCart = ({ product, selectedStyle }) => {
  if (selectedStyle !== undefined) {
    const toggle = false;
    const boughtToggle = false;
    const checkCartToggle = false;
    const arrayOfSkus = Object.values(selectedStyle.skus);
    const arrayOfSkusID = Object.keys(selectedStyle.skus);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(null);
    const [requiredSelection, setRequiredSelection] = useState(toggle);
    const [boughtItem, setBoughtItem] = useState(boughtToggle);
    const [itemInCart, setItemInCart] = useState(0);
    //const [checkCart, setCheckCart] = useState(checkCartToggle);

    useEffect(() => {
      setSelectedSize(null);
      setItemInCart(0);
      setRequiredSelection(toggle);
      setBoughtItem(boughtToggle);
    }, [product, selectedStyle]);

    arrayOfSkus.unshift({
      quantity: null, size:'Select Size',
    });

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

    // const onClickCheckCart = () => {

    // };

    const onClickAddCart = () => {
      if (selectedSize === arrayOfSkus[0].size || selectedQuantity === null) {
        setRequiredSelection(!toggle);
        setBoughtItem(toggle);
      } else {
        setRequiredSelection(toggle);
        setBoughtItem(!boughtToggle);
        setItemInCart((prevCount) => prevCount + 1);
        arrayOfSkus.forEach((element) => {
          if (selectedSize === element.size) {
            const index = arrayOfSkus.indexOf(element);
            const idToAddToCart = Number(arrayOfSkusID[index - 1]);
            axios.post('/cart', { sku_id: idToAddToCart });
          }
        });
      }
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
      <>
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
      <div className="button-area">
          <button className="add-to-cart" onClick={onClickAddCart}>Add to Cart</button>
          <i className="check-cart fas fa-shopping-cart"></i>
          <p className={`product-required-selection-${requiredSelection ? 'active' : 'disabled'}`}>Please select a size!</p>
          <p className={`product-add-cart-${boughtItem ? 'active' : 'disabled'}`}>Added to Cart! {`(${itemInCart}) item`}</p>
        </div>
        <div className="product-cart-number">{itemInCart}</div>
        <div className="check-cart-modal-active"></div>
      </>
    );
  }

  return (
    <div />
  );
};

ProductCart.propTypes = {
  product: propTypes.object,
  selectedStyle: propTypes.object,
};

export default ProductCart;
