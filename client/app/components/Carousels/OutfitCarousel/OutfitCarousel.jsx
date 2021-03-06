/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
import React, { useState, useEffect, useCallback } from 'react';
import propTypes from 'proptypes';
import CarouselCard from '../CarouselCard/CarouselCard.jsx';
import store from './storeAPI.js';
import AddToOutfit from './AddToOutfitButton.jsx';
import './OutfitCarousel.css';

const OutfitCarousel = ({ productInfo, handleRedirect }) => {
  const fetchAllFromStore = useCallback(() => (store.getAll().map((item) => (
    <CarouselCard
      key={item.id}
      {...item}
      handleRedirect={handleRedirect}
      buttonFunc={() => {
        store.delete(item.id);
      }}
      carouselType="outfit"
    />
  ))), []);
  const [outfitList, setOutfitList] = useState([
    createButton(),
    store.getAll().map(item => cardTemplate(item.id, item))
  ]);
  const [currentlyDisplayed, setCurrentlyDisplayed] = useState({});

  // after initial data fetch
  useEffect(() => {
    console.log('productInfo.id:', productInfo.id);
    setOutfitList([
      createButton(),
      store.getAll().map(item => cardTemplate(item.id, item))
    ]);
  }, [productInfo]);

  useEffect(() => {
    if (outfitList.length > 0) {
      const currState = outfitList;
      const toDisplay = {};
      toDisplay.start = currentlyDisplayed.start ?? 0;
      toDisplay.end = Math.min(3, outfitList.length - 1);
      toDisplay.cards = currState.filter((card, index) => (
        index <= toDisplay.end
      ));
      setCurrentlyDisplayed({ ...toDisplay });
    }
  }, [outfitList.length]);

  const cardTemplate = (key, cardDetails) => (
    <CarouselCard
      key={key}
      {...cardDetails}
      handleRedirect={handleRedirect}
      buttonFunc={handleActionButtonClick}
      carouselType="outfit"
    />
  );

  const handleAddToOutfit = () => {
    const prevState = outfitList;
    console.log('prevState', prevState);
    console.log('productInfo.id', productInfo.id);
    if (productInfo.id !== 0 && !store.has(productInfo.id)) {
      store.save(productInfo.id, productInfo);
      const newCard = cardTemplate(productInfo.id, productInfo);
      if (prevState.length === 0) {
        setOutfitList([newCard]);
      } else {
        setOutfitList([...prevState, newCard]);
      }
    }
  };

  const createButton = () => (
    <AddToOutfit
      handleAddToOutfit={handleAddToOutfit}
    />
  );

  // On Action Button Click
  const handleActionButtonClick = (id) => {
    store.delete(id);
    populateState();
  };

  const handleNext = () => {
    if (currentlyDisplayed.end < outfitList.length - 1) {
      const currState = outfitList;
      const toDisplay = {};
      toDisplay.start = currentlyDisplayed.start + 1;
      toDisplay.end = currentlyDisplayed.end + 1;
      toDisplay.cards = currState.slice(toDisplay.start, toDisplay.end + 1);
      setCurrentlyDisplayed({ ...toDisplay });
    }
  };

  const handleBack = () => {
    if (currentlyDisplayed.start > 0) {
      const currState = outfitList;
      const toDisplay = {};
      toDisplay.start = currentlyDisplayed.start - 1;
      toDisplay.end = currentlyDisplayed.end - 1;
      toDisplay.cards = currState.slice(toDisplay.start, toDisplay.end + 1);
      setCurrentlyDisplayed({ ...toDisplay });
    }
  };

  return (
    <>
      <h2 id="outfit-carousel-title">Your Outfit</h2>
      <button type="button" onClick={() => { store.deleteAll(); }}>clear storage</button>
      <div id="outfit-carousel">
        <button
          type="button"
          id="outfit-back"
          className={
            currentlyDisplayed.start === 0
              ? 'outfit-invisible'
              : 'outfit-visible'
          }
          onClick={handleBack}
        >
          <i className="fas fa-arrow-left" />
        </button>
        <hr className="outfit-carousel-divider" />
        <div id="outfit-card-container">
          {currentlyDisplayed.cards}
        </div>
        <hr className="outfit-carousel-divider" />
        <button
          type="button"
          id="outfit-next"
          className={
            currentlyDisplayed.end === outfitList.length - 1
              ? 'outfit-invisible'
              : 'outfit-visible'
          }
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
