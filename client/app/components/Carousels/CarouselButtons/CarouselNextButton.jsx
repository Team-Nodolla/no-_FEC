import React from 'react';
import propTypes from 'proptypes';

const CarouselNextButton = ({ atEnd, handleNext }) => (
  <button
    type="button"
    id="outfit-next"
    className={atEnd ? 'outfit-invisible' : 'outfit-visible'}
    onClick={handleNext}
  >
    <i className="fas fa-arrow-right" />
  </button>
);

CarouselNextButton.propTypes = {
  atEnd: propTypes.bool,
  handleNext: propTypes.func,
};

export default CarouselNextButton;
