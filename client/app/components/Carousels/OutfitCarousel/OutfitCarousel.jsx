import React from 'react';
import propTypes from 'proptypes';
import './OutfitCarousel.css';

const OutfitCarousel = ({ productInfo }) => {
  const handleAddToOutfit = () => {

  };

  return (
    <>
      <h2 id="outfit-carousel-title">Your Outfit</h2>
      <div id="outfit-carousel">
        <button type="button" id="add-to-outfit-btn" onClick={() => { handleAddToOutfit(); }}>
          <i className="fas fa-plus-square" />
          <br />
          Add To Outfit
        </button>
      </div>
    </>
  );
};

OutfitCarousel.propTypes = {
  productInfo: propTypes.any,
};

export default OutfitCarousel;
