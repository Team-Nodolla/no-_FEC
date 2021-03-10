import React from 'react';
import propTypes from 'proptypes';
import './CarouselButtons.css';

const CarouselNextButton = ({ atEnd, handleNext }) => {
  const buttonVisibility = atEnd ? 'carousel-btn-invisible' : 'carousel-btn-visible';

  return (
    <button
      aria-label="Carousel Next Button"
      type="button"
      className={`carousel-btn-next ${buttonVisibility}`}
      onClick={handleNext}
    >
      <i className="fas fa-arrow-right" />
    </button>
  );
};

CarouselNextButton.propTypes = {
  atEnd: propTypes.bool.isRequired,
  handleNext: propTypes.func.isRequired,
};

export default CarouselNextButton;
