import React, { useState, useEffect } from 'react';
import propTypes from 'proptypes';
import ProductCategoryAndTitle from './ProductCategoryAndTitle/ProductCategoryAndTitle.jsx';
import ProductImageGallery from './ProductImageGallery/ProductImageGallery.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import ProductStyleSelector from './ProductStyleSelector/ProductStyleSelector.jsx';
import ProductCart from './ProductCart/ProductCart.jsx';
import './ProductOverview.css';

const ProductOverview = ({ product, styles }) => {
  if (styles !== undefined) {
    const [priceOfProduct, setPriceOfProduct] = useState(product.originalPrice);
    const [selectedStyle, setSelectedStyle] = useState(styles[0]);

    useEffect(() => {
      setPriceOfProduct(() => product.originalPrice);
      setSelectedStyle(() => styles[0]);
    }, [product, styles]);

    const handleSelectedStyle = (style, price) => {
      setSelectedStyle(style);
      setPriceOfProduct(price);
    };

    return (
      <div className="product-overview-container">
        <div className="product-image-container">
          <ProductImageGallery style={selectedStyle} />
        </div>
        <div className="product-info-container">
          <div className="product-description-container">
            <ProductCategoryAndTitle price={priceOfProduct} product={product} />
          </div>
          <div className="product-style-container">
            <ProductStyleSelector
              handleSelectedStyleClick={handleSelectedStyle}
              styles={styles}
              styleName={selectedStyle}
            />
          </div>
          <div className="product-cart-container">
            <ProductCart />
          </div>
        </div>
        <div className="product-summary-container">
          <ProductInfo product={product} />
        </div>
      </div>
    );
  }

  return (
    <div className="product-overview-container">
      <div className="product-image-container" />
      <div className="product-info-container">
        <div className="product-description-container" />
        <div className="product-style-container" />
        <div className="product-cart-container" />
      </div>
      <div className="product-summary-container" />
    </div>
  );
};

ProductOverview.propTypes = {
  product: propTypes.object,
  styles: propTypes.array,
};

export default ProductOverview;
