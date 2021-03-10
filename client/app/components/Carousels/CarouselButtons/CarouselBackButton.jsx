import React from 'react';
import propTypes from 'proptypes';
import './CarouselButtons.css';

const CarouselBackButton = ({ atStart, handleBack }) => {
  const buttonVisibility = atStart ? 'carousel-btn-invisible' : 'carousel-btn-visible';

  return (
    <button
      aria-label="Carousel Back Button"
      type="button"
      className={`carousel-btn-back ${buttonVisibility}`}
      onClick={handleBack}
    >
      <i className="fas fa-arrow-left" />
    </button>
  );
};

CarouselBackButton.propTypes = {
  atStart: propTypes.bool.isRequired,
  handleBack: propTypes.func.isRequired,
};

export default CarouselBackButton;
