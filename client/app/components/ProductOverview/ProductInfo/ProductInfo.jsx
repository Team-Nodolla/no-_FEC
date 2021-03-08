import React from 'react';
import './ProductInfo.css';

const ProductInfo = ({ product }) => {
  return (
    <div className="product-info-innerContainer">
      <div className="product-item-summary">
        <h2>{product.slogan}</h2>
        <p>{product.description}</p>
        <div>
          <p>Share: </p>
          <i style={{cursor: 'pointer', fontSize: '30px'}} className="fab fa-twitter-square"></i>
          <i style={{cursor: 'pointer', paddingLeft: '10px', fontSize: '30px'}} className="fab fa-facebook-square"></i>
          <i style={{cursor: 'pointer', paddingLeft: '10px', fontSize: '30px'}} className="fab fa-pinterest-square"></i>
        </div>
      </div>
      <div className="product-features">
        {product.features.map((itemFeature) => {
          return (
            <div className="product-feature-single">
              <i className="feature-check fas fa-check"></i>
              <p>{itemFeature.feature}, {itemFeature.value}</p>
            </div>
          )
        }) }
      </div>
    </div>
  )
};

export default ProductInfo;
