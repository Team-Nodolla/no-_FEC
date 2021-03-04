/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import propTypes from 'proptypes';
import CarouselCard from '../CarouselCard/CarouselCard.jsx';
import './OutfitCarousel.css';

const OutfitCarousel = ({ productInfo }) => {
  const [outfitList, setOutfitList] = useState([]);

  const handleAddToOutfit = () => {
    const prevSate = outfitList;
    const newCard = (
      <CarouselCard
        {...productInfo}
        buttonFunc={console.log.bind(null, 'click')}
        carouselType="outfit"
      />
    );
    if (prevSate.length === 0) {
      setOutfitList([newCard]);
    } else {
      setOutfitList([...prevSate, newCard]);
    }
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
        <div id="outfit-card-container">
          {outfitList}
        </div>
      </div>
    </>
  );
};

OutfitCarousel.propTypes = {
  productInfo: propTypes.any,
};

export default OutfitCarousel;
