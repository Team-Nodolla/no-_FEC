import React, { useState, useEffect } from 'react';
import axios from 'axios';
import propTypes from 'proptypes';
import ProductCategoryAndTitle from './ProductCategoryAndTitle/ProductCategoryAndTitle.jsx';
import ProductImageGallery from './ProductImageGallery/ProductImageGallery.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import ProductStyleSelector from './ProductStyleSelector/ProductStyleSelector.jsx';
import './ProductOverview.css';

const ProductOverview = ({ productID, product }) => {
  const [styles, getStyles] = useState({});

  useEffect(() => {
    if (productID !== 0) {
      axios.get(`/products/${productID}/styles`)
        .then((data) => getStyles(data.data))
        .catch((err) => console.log('error'));
    }
  }, [productID]);
  if (styles !== undefined) {
    return (
      <div className="product-overview-container">
        <div className="product-image-container">
          <ProductImageGallery photos={styles.results} />
        </div>
        <div className="product-description-container">
          <ProductCategoryAndTitle styles={styles.results} product={product} />
        </div>
        <div className="product-summary-container">
          <ProductInfo product={product} />
        </div>
        <ProductStyleSelector styles={styles.results} />
      </div>
    );
  }

  return (
    <div>
    </div>
  );
};

ProductOverview.propTypes = {
  productID: propTypes.number.isRequired,
  product: propTypes.object.isRequired,
};

export default ProductOverview;
