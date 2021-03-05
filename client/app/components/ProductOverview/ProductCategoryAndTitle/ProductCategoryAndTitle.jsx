import React from 'react';
import './ProductCategoryAndTitle.css';
import StarRating from '../../StarRating/StarRating.jsx';

const ProductCategoryAndTitle = ({ price, product }) => {
  return (
    <div className='categoryAndTitleContainer'>
      <div className="product-star">
      <StarRating reviewScore={0} setMargin='16px 0 0 0' />
      <p className='read-all-review'>read all reviews</p>
      </div>
      <p>{product.category}</p>
      <h1>{product.name}</h1>
      <p>${price}</p>
    </div>
  );
};

export default ProductCategoryAndTitle;
