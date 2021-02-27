import React from 'react';
import ProductCategoryAndTitle from './ProductCategoryAndTitle/ProductCategoryAndTitle.jsx';

const ProductOverview = ({ product }) => {
  return (
    <div>
      <ProductCategoryAndTitle product={product}/>
    </div>
  );
};

export default ProductOverview;
