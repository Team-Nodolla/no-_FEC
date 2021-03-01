import React, { useState } from 'react';
import axios from 'axios';
import ProductCategoryAndTitle from './ProductCategoryAndTitle/ProductCategoryAndTitle.jsx';
import ProductImageGallery from './ProductImageGallery/ProductImageGallery.jsx';

const ProductOverview = ({ productID, product }) => {
    return (
      <div>
        <ProductImageGallery />
        <ProductCategoryAndTitle product={product} />
      </div>
    );
};

export default ProductOverview;
