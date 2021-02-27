import React from 'react';
import axios from 'axios';
import ProductCategoryAndTitle from './ProductCategoryAndTitle/ProductCategoryAndTitle.jsx';

const ProductOverview = ({ product }) => {
  return (
    <div>
      <ProductCategoryAndTitle product={product}/>
    </div>
  );
};

export default ProductOverview;
