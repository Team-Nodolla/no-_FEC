import React from 'react';
import propTypes from 'proptypes';
import './CarouselButtons.css';

const CarouselBackButton = ({ atStart, handleBack }) => (
  <button
    type="button"
    id="carousel-btn-back"
    className={atStart ? 'carousel-btn-invisible' : 'carousel-btn-visible'}
    onClick={handleBack}
  >
    <i className="fas fa-arrow-left" />
  </button>
);

CarouselBackButton.propTypes = {
  atStart: propTypes.bool.isRequired,
  handleBack: propTypes.func.isRequired,
};

export default CarouselBackButton;
