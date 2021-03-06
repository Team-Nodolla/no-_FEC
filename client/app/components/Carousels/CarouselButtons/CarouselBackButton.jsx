import React from 'react';
import propTypes from 'proptypes';

const CarouselBackButton = ({ atStart, handleBack }) => (
  <button
    type="button"
    id="outfit-back"
    className={atStart ? 'outfit-invisible' : 'outfit-visible'}
    onClick={handleBack}
  >
    <i className="fas fa-arrow-left" />
  </button>
);

CarouselBackButton.propTypes = {
  atStart: propTypes.bool,
  handleBack: propTypes.func,
};

export default CarouselBackButton;
