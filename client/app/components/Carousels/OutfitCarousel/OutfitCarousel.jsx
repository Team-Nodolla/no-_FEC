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
  const [outfitList, setOutfitList] = useState([]);
  const [currentlyDisplayed, setCurrentlyDisplayed] = useState({});

  // after initial data fetch
  useEffect(() => {
    store.subscribe((outfitsInStore) => {
      console.log('subscribe productInfo ID:', productInfo.id);
      const outfitCards = outfitsInStore.map((outfitDetails) => (
        // cardTemplate(outfitDetails)
        <CarouselCard
          key={outfitDetails.id}
          {...outfitDetails}
          handleRedirect={handleRedirect}
          buttonFunc={() => { store.remove(outfitDetails.id); }}
          carouselType="outfit"
        />
      ));
      setOutfitList([createButton(), ...outfitCards]);
    });
  }, []);

  useEffect(() => {
    if (productInfo.id !== 0) {
      setOutfitList([<AddToOutfit
        productInfo={productInfo}
      />,
      ...store.getAll().map((outfitDetails) => (
        <CarouselCard
          key={outfitDetails.id}
          {...outfitDetails}
          handleRedirect={handleRedirect}
          buttonFunc={() => { store.remove(outfitDetails.id); }}
          carouselType="outfit"
        />
      ))]);
    }
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

  // const cardTemplate = (cardDetails) => (
  //   <CarouselCard
  //     key={cardDetails.id}
  //     {...cardDetails}
  //     handleRedirect={handleRedirect}
  //     buttonFunc={store.remove(cardDetails.id)}
  //     carouselType="outfit"
  //   />
  // );

  // const handleAddToOutfit = () => {
  //   if (productInfo.id !== 0 && !store.has(productInfo.id)) {
  //     store.save(productInfo.id, productInfo);
  //   }
  // };

  const createButton = () => (
    <AddToOutfit
      productInfo={productInfo}
    />
  );

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
      <button type="button" onClick={() => { store.removeAll(); }}>clear storage</button>
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
