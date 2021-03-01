/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/extensions */
import React from 'react';
import propTypes from 'proptypes';
import StarRating from '../../StarRating/StarRating.jsx';

const CarouselCard = ({
  productImage,
  category,
  name,
  price,
  stars,
  buttonFunc,
}) => (
  <div id="card">
    <button id="action" type="button" onClick={() => { buttonFunc(); }}><i className="far fa-star" /></button>
    <img id="product-image" src={productImage} alt="" />
    <br />
    <span className="descriptive" id="category">{category}</span>
    <h3 className="descriptive" id="product-name">{name}</h3>
    <span className="descriptive" id="price">{`$${price}`}</span>
    <StarRating reviewScore={stars} setMargin="10px 0 0 10px" />
  </div>
);

CarouselCard.propTypes = {
  productImage: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  stars: propTypes.number.isRequired,
  buttonFunc: propTypes.function.isRequired,
};

export default CarouselCard;
