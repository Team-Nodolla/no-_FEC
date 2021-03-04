import React from 'react';
import './OutfitCarousel.css';

const OutfitCarousel = () => {
  const handleAddToOutfit = () => {

  };

  return (
    <>
      <h2 id="outfit-carousel-title">Your Outfit</h2>
      <div id="outfit-carousel">
        <button id="add-to-outfit-btn">
          <i className="fas fa-plus-square"></i>
          <br />
          {'Add To Outfit'}
        </button>
      </div>
    </>
  );
};

export default OutfitCarousel;
