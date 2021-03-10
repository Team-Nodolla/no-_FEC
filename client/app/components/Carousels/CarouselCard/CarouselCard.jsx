/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
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
  let displayPrice;

  if (salePrice !== null) {
    displayPrice = (
      <>
        <span className="descriptive old-price">{`$${originalPrice}`}</span>
        <span className="descriptive display-price">{`$${salePrice}`}</span>
      </>
    );
  } else {
    displayPrice = <span className="descriptive" id="display-price">{`$${originalPrice}`}</span>;
  }

  return (
    <div className={`card ${carouselType}-card`} onClick={() => { handleRedirect(id) }} >
      <button
        aria-label="Action Button"
        className="card-action-btn"
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
      <div className="card-image-container">
        {productImage
          ? <img className="card-image" src={productImage} alt={name ? name : 'Product Name'} />
          : (
            <img
              className="card-no-image"
              src="https://watertownbusinesscoalition.com/assets/images/no_image_available.jpeg"
              alt={name ? name : 'Product Name'}
            />
          )}
      </div>
      <div className="descriptive-container">
        <span className="descriptive category">{category ? category : 'Category'}</span>
        <h3 className="descriptive product-name">{name ? name : 'Product Name'}</h3>
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
