import React from 'react';
import './ProductCategoryAndTitle.css';
import StarRating from '../../StarRating/StarRating.jsx';

const ProductCategoryAndTitle = ({ reviewNumber, price, product, darkMode }) => {
  if (product !== undefined && reviewNumber?.results !== undefined) {
    return (
      <div className='categoryAndTitleContainer'>
        <div className={`product-star-${reviewNumber.results.length !== 0 ? 'active' : 'disabled'}`}>
        <StarRating reviewScore={product.averageRating} setMargin='16px 0 0 0' darkMode={darkMode} />
        <p className='read-all-review'>{`read (${reviewNumber.results.length}) reviews`}</p>
        </div>
        <p>{product.category}</p>
        <h1>{product.name}</h1>
        <p>${price}</p>
      </div>
    );
  }

  return (
    <></>
  );
};

export default ProductCategoryAndTitle;
