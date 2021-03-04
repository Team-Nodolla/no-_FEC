/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import propTypes from 'proptypes';
import StarRating from '../../StarRating/StarRating.jsx';
import './CarouselCard.css';

const CarouselCard = ({
  id,
  productImage,
  category,
  name,
  originalPrice,
  salePrice,
  stars,
  buttonFunc,
  handleRedirect,
  carouselType,
}) => {
  const [onSale] = useState(Boolean(salePrice));
  let displayPrice;
  let actionButtonLook;
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

  if (carouselType === 'related') {
    actionButtonLook = <i className="far fa-star" />;
  } else {
    actionButtonLook = <i className="far fa-times-circle" />;
  }

  return (
    <div id="card" onClick={() => { handleRedirect(id) }} >
      <button id="action" type="button" onClick={() => { buttonFunc(); }}>{actionButtonLook}</button>
      <div id="card-image-container">
        <img id="card-image" src={productImage} alt="" />
      </div>
      <div id="descriptive-container">
        <span className="descriptive" id="category">{category}</span>
        <h3 className="descriptive" id="product-name">{name}</h3>
        {displayPrice}
        <StarRating reviewScore={stars} setMargin="10px 0 0 10px" />
      </div>
    </div>
  );
};

CarouselCard.propTypes = {
  id: propTypes.number.isRequired,
  productImage: propTypes.string,
  category: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  originalPrice: propTypes.string.isRequired,
  salePrice: propTypes.string,
  stars: propTypes.number,
  buttonFunc: propTypes.func.isRequired,
  handleRedirect: propTypes.func.isRequired,
  carouselType: propTypes.string.isRequired,
};

export default CarouselCard;
