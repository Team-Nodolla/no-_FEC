import React from 'react';

const ProductInfo = ({ product }) => {
  return(
    <div>
      <h1>{product.slogan}</h1>
      <p>{product.description}</p>
    </div>
  )
};

export default ProductInfo;
