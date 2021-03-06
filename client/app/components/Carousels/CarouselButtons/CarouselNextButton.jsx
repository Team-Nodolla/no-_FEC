import React from 'react';
import propTypes from 'proptypes';
import './CarouselButtons.css';

const CarouselNextButton = ({ atEnd, handleNext }) => (
  <button
    type="button"
    id="carousel-btn-next"
    className={atEnd ? 'carousel-btn-invisible' : 'carousel-btn-visible'}
    onClick={handleNext}
  >
    <i className="fas fa-arrow-right" />
  </button>
);

CarouselNextButton.propTypes = {
  atEnd: propTypes.bool.isRequired,
  handleNext: propTypes.func.isRequired,
};

export default CarouselNextButton;
