/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import propTypes from 'proptypes';
import StarRating from '../../StarRating/StarRating.jsx';
import './CarouselCard.css';

const CarouselCard = ({
  productImage,
  category,
  name,
  originalPrice,
  salePrice,
  stars,
  buttonFunc,
}) => {
  const [onSale] = useState(Boolean(salePrice));
  let displayPrice;
  if (onSale) {
    displayPrice = (
      <>
        <span className="descriptive" id="old-price">{`$${originalPrice}`}</span>
        <span className="descriptive" id="display-price">{`$${salePrice}`}</span>
      </>
    );
  } else {
    displayPrice = <span className="descriptive" id="display-price">{`$${originalPrice}`}</span>;
  }
  return (
    <div id="card">
      <button id="action" type="button" onClick={() => { buttonFunc(); }}><i className="far fa-star" /></button>
      <img id="product-image" src={productImage} alt="" />
      <br />
      <span className="descriptive" id="category">{category}</span>
      <h3 className="descriptive" id="product-name">{name}</h3>
      {displayPrice}
      <StarRating reviewScore={stars} setMargin="10px 0 0 10px" />
    </div>
  );
};

CarouselCard.propTypes = {
  productImage: propTypes.string,
  category: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  originalPrice: propTypes.string.isRequired,
  salePrice: propTypes.string,
  stars: propTypes.number,
  buttonFunc: propTypes.func.isRequired,
};

export default CarouselCard;
