import React from 'react';

const ProductCategoryAndTitle = ({ product }) => {
  return (
    <div>
      <p>{product.category}</p>
      <h2>{product.name}</h2>
      <h2>${product.default_price}</h2>
    </div>
  );
};

export default ProductCategoryAndTitle;
