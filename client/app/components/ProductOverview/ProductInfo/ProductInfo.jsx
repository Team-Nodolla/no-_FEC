import React from 'react';

const ProductInfo = ({ product }) => (
  <div>
    <h2>{product.slogan}</h2>
    <p>{product.description}</p>
    <div>
      <p>Share: </p>
      <i className="fab fa-twitter-square"></i>
      <i style={{paddingLeft: '10px'}} className="fab fa-facebook-square"></i>
      <i style={{paddingLeft: '10px'}} className="fab fa-pinterest-square"></i>
    </div>
  </div>
);

export default ProductInfo;
