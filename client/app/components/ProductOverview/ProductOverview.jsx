import React, { useState } from 'react';
import propTypes from 'proptypes';
import ProductCategoryAndTitle from './ProductCategoryAndTitle/ProductCategoryAndTitle.jsx';
import ProductImageGallery from './ProductImageGallery/ProductImageGallery.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import ProductStyleSelector from './ProductStyleSelector/ProductStyleSelector.jsx';
import ProductCart from './ProductCart/ProductCart.jsx';
import './ProductOverview.css';

const ProductOverview = ({ product, defaultStyle, styles }) => {
  if (styles !== undefined) {
    const [selectedStyle, setSelectedStyle] = useState(styles[0]);

    const handleSelectedStyle = (style) => {
      setSelectedStyle(style);
    };

    console.log('product:, ', product);
    console.log('default styles: ', defaultStyle);
    console.log('styles: ', styles);
    return (
      <div className="product-overview-container">
        <div className="product-image-container">
          <ProductImageGallery style={selectedStyle} />
        </div>
        <div className="product-info-container">
          <div className="product-description-container">
            <ProductCategoryAndTitle product={product} />
          </div>
          <div className="product-style-container">
            <ProductStyleSelector handleSelectedStyleClick={handleSelectedStyle} styles={styles} />
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
    <div />
  );
};

ProductOverview.propTypes = {
  styles: propTypes.object.isRequired,
};

export default ProductOverview;
