/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import propTypes from 'proptypes';
import StarRating from '../../StarRating/StarRating.jsx';
import './CarouselCard.css';

const CarouselCard = ({
  id,
  productImage = 'https://watertownbusinesscoalition.com/assets/images/no_image_available.jpeg',
  category,
  name,
  originalPrice,
  salePrice,
  reviewScore,
  handleActionButton,
  handleRedirect,
  carouselType,
  features,
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
    <div className={`card ${carouselType}-card`} onClick={() => { handleRedirect(id) }} >
      <button
        id="card-action-btn"
        type="button"
        onClick={(e) => { e.stopPropagation(); handleActionButton(id, name, features); }}
      >
        <i className={
          carouselType === 'related'
            ? 'related-action-btn fas fa-star'
            : 'outfit-action-btn far fa-times-circle'
        }
        />
      </button>
      <div id="card-image-container">
        {productImage
          ? <img id="card-image" src={productImage} alt={`${name}`} />
          : (
            <img
              id="card-no-image"
              src="https://watertownbusinesscoalition.com/assets/images/no_image_available.jpeg"
              alt={`${name}`}
            />
          )
        }
      </div>
      <div id="descriptive-container">
        <span className="descriptive" id="category">{category}</span>
        <h3 className="descriptive" id="product-name">{name}</h3>
        {displayPrice}
        <StarRating reviewScore={reviewScore} setMargin="10px 0 0 10px" />
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
  reviewScore: propTypes.number,
  handleActionButton: propTypes.func.isRequired,
  handleRedirect: propTypes.func.isRequired,
  carouselType: propTypes.string.isRequired,
};

export default CarouselCard;
