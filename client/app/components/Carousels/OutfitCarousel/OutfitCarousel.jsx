/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import propTypes from 'proptypes';
import CarouselCard from '../CarouselCard/CarouselCard.jsx';
import store from './storeAPI.js';
import AddToOutfit from './AddToOutfitButton.jsx';
import './OutfitCarousel.css';

const OutfitCarousel = ({ productInfo, handleRedirect }) => {
  const [outfitList, setOutfitList] = useState([...store.getAll()]);
  const [currentlyDisplayed, setCurrentlyDisplayed] = useState({ start: 0, end: 0, cards: [] });

  // on mount, subscribe to store changes
  useEffect(() => {
    store.subscribe((outfitsInStore) => {
      setOutfitList(outfitsInStore);
    });
  }, []);

  // After state is set
  useEffect(() => {
    if (store.size() > 0) {
      const start = currentlyDisplayed.start;
      const end = Math.min(2, store.size() - 1);
      const cards = outfitList.filter((card, index) => (
        index <= end
      ));
      setCurrentlyDisplayed({ start, end, cards });
    }
  }, [outfitList.length]);

  const cardTemplate = (cardDetails) => (
    <CarouselCard
      key={cardDetails.id}
      {...cardDetails}
      handleRedirect={handleRedirect}
      buttonFunc={() => { store.remove(cardDetails.id); }}
      carouselType="outfit"
    />
  );

  const handleNext = () => {
    if (currentlyDisplayed.end < store.size() - 1) {
      const toDisplay = {};
      toDisplay.start = currentlyDisplayed.start + 1;
      toDisplay.end = currentlyDisplayed.end + 1;
      toDisplay.cards = outfitList.slice(toDisplay.start, toDisplay.end + 1);
      setCurrentlyDisplayed({ ...toDisplay });
    }
  };

  const handleBack = () => {
    if (currentlyDisplayed.start > 0) {
      const toDisplay = {};
      toDisplay.start = currentlyDisplayed.start - 1;
      toDisplay.end = currentlyDisplayed.end - 1;
      toDisplay.cards = outfitList.slice(toDisplay.start, toDisplay.end + 1);
      setCurrentlyDisplayed({ ...toDisplay });
    }
  };

  return (
    <>
      <h2 id="outfit-carousel-title">Your Outfit</h2>
      <button type="button" onClick={() => { store.removeAll(); }}>clear storage</button>
      <div id="outfit-carousel">
        <button
          type="button"
          id="outfit-back"
          className={currentlyDisplayed.start === 0 ? 'outfit-invisible' : 'outfit-visible'}
          onClick={handleBack}
        >
          <i className="fas fa-arrow-left" />
        </button>
        <hr className="outfit-carousel-divider" />
        <div id="outfit-card-container">
          <AddToOutfit
            productInfo={productInfo}
          />
          {currentlyDisplayed?.cards?.map((cardDetails) => (
            cardTemplate(cardDetails)
          ))}
        </div>
        <hr className="outfit-carousel-divider" />
        <button
          type="button"
          id="outfit-next"
          className={currentlyDisplayed.end === store.size() - 1 ? 'outfit-invisible' : 'outfit-visible'}
          onClick={handleNext}
        >
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    </>
  );
};

OutfitCarousel.propTypes = {
  productInfo: propTypes.object.isRequired,
  handleRedirect: propTypes.func.isRequired,
};

export default OutfitCarousel;
