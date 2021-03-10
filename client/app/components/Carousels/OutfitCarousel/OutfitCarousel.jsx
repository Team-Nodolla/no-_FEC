/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import propTypes from 'proptypes';
import CarouselCard from '../CarouselCard/CarouselCard.jsx';
import store from './storeAPI.js';
import AddToOutfit from './AddToOutfitButton.jsx';
import NextButton from '../CarouselButtons/CarouselNextButton.jsx';
import BackButton from '../CarouselButtons/CarouselBackButton.jsx';
import './OutfitCarousel.css';

const OutfitCarousel = ({ onUserClick, productInfo, handleRedirect }) => {
  const [outfitList, setOutfitList] = useState([...store.getAll()]);
  const [currentlyDisplayed, setCurrentlyDisplayed] = useState(
    {
      start: 0,
      atStart: true,
      end: 0,
      atEnd: false,
      cards: []
    });

  // on mount, subscribe to store changes
  useEffect(() => {
    store.subscribe((outfitsInStore) => {
      setOutfitList(outfitsInStore);
    });
  }, []);

  // After outfitList state is set
  useEffect(() => {
    if (store.size() >= 0) {
      let {start, atStart, end, atEnd, cards} = currentlyDisplayed;
      end = Math.min(2, store.size() - 1);
      atEnd = (end === store.size() - 1);
      cards = outfitList.length === 0
      ? []
      : outfitList.filter((card, index) => (
        index <= end
      ));
      setCurrentlyDisplayed({ start, atStart, end, atEnd, cards });
    }
  }, [outfitList.length]);

  const cardTemplate = (cardDetails) => (
    <CarouselCard
      key={cardDetails.id}
      {...cardDetails}
      handleRedirect={handleRedirect}
      handleActionButton={() => { store.remove(cardDetails.id); }}
      carouselType="outfit"
    />
  );

  const handleNext = () => {
    if (currentlyDisplayed.end < store.size() - 1) {
      let { start, atStart, end, atEnd, cards } = currentlyDisplayed;
      start++;
      end++;
      atStart = false;
      atEnd = end === store.size() - 1 ? true : false;
      cards = outfitList.slice(start, end + 1);
      setCurrentlyDisplayed({ start, atStart, end, atEnd, cards });
    }
  };

  const handleBack = () => {
    if (currentlyDisplayed.start > 0) {
      let { start, atStart, end, atEnd, cards } = currentlyDisplayed;
      start--;
      end--;
      atStart = start === 0 ? true : false;
      atEnd = end === store.size() - 1 ? true : false;
      cards = outfitList.slice(start, end + 1);
      setCurrentlyDisplayed({ start, atStart, end, atEnd, cards });
    }
  };

  return (
    <div onClick={onUserClick}>
      <h2 id="outfit-carousel-title">Your Outfit</h2>
      <div id="outfit-carousel">
        <BackButton atStart={currentlyDisplayed.atStart} handleBack={handleBack} />
        <div id="outfit-card-container">
          <AddToOutfit
            productInfo={productInfo}
          />
          {currentlyDisplayed?.cards?.map((cardDetails) => (
            cardTemplate(cardDetails)
          ))}
        </div>
        <NextButton atEnd={currentlyDisplayed.atEnd} handleNext={handleNext} />
      </div>
    </div>
  );
};

OutfitCarousel.propTypes = {
  productInfo: propTypes.object.isRequired,
  handleRedirect: propTypes.func.isRequired,
};

export default OutfitCarousel;
