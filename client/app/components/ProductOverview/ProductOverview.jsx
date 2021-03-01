import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCategoryAndTitle from './ProductCategoryAndTitle/ProductCategoryAndTitle.jsx';
import ProductImageGallery from './ProductImageGallery/ProductImageGallery.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import './ProductOverview.css';

const ProductOverview = ({ productID, product }) => {
  const [styles, getStyles] = useState('');

  useEffect(() => {
    if (productID !== 0) {
      axios.get(`/products/${productID}/styles`)
        .then((data) => getStyles(data.data))
        .catch((err) => console.log('error'));
    }
  }, [productID]);

  console.log(styles);
  return (
    <div className="product-overview-container">
      <div className="product-image-container">
        <ProductImageGallery />
      </div>
      <div className="product-description-container">
        <ProductCategoryAndTitle product={product} />
      </div>
      <div className="product-summary-container">
        <ProductInfo product={product} />
      </div>
    </div>
  );
};

export default ProductOverview;
