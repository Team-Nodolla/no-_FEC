import React from 'react';
import propTypes from 'proptypes';
import ProductCategoryAndTitle from './ProductCategoryAndTitle/ProductCategoryAndTitle.jsx';
import ProductImageGallery from './ProductImageGallery/ProductImageGallery.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import ProductStyleSelector from './ProductStyleSelector/ProductStyleSelector.jsx';
import './ProductOverview.css';

const ProductOverview = ({ styles, differentStyles }) => {
  if (styles !== undefined) {
    console.log(styles);
    return (
      <div className="product-overview-container">
        <div className="product-image-container">
          <ProductImageGallery style={styles} />
        </div>
        <div className="product-info-container">
          <div className="product-description-container">
            <ProductCategoryAndTitle product={styles} />
          </div>
          <div className="product-style-container">
            <ProductStyleSelector styles={differentStyles} />
          </div>
        </div>
        <div className="product-summary-container">
          <ProductInfo product={styles} />
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
