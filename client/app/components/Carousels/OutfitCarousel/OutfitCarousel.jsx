/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import propTypes from 'proptypes';
import CarouselCard from '../CarouselCard/CarouselCard.jsx';
import store from './storeAPI.jsx';
import './OutfitCarousel.css';

const OutfitCarousel = ({ productInfo, handleRedirect }) => {
  const [outfitList, setOutfitList] = useState([]);

  const handleActionButtonClick = (id) => {
    store.delete(id);
    const newState = outfitList.filter((item) => (
      item.id !== id
    ));
    setOutfitList(newState);
  };

  const cardTemplate = (key, cardDetails) => (
    <CarouselCard
      key={key}
      {...cardDetails}
      handleRedirect={handleRedirect}
      buttonFunc={handleActionButtonClick}
      carouselType="outfit"
    />
  );

  // after initial data fetch
  useEffect(() => {
    if (productInfo.id !== 0) {
      const outfitsInStore = [];
      store.getAll().forEach((item) => {
        outfitsInStore.push(
          cardTemplate(item.id, item),
        );
      });
      setOutfitList(outfitsInStore);
    }
  }, [productInfo]);

  const handleAddToOutfit = () => {
    const prevSate = outfitList;
    if (productInfo.id !== 0 && !store.has(productInfo.id)) {
      console.log(productInfo.id);
      store.save(productInfo.id, productInfo);
      const newCard = cardTemplate(productInfo.id, productInfo);
      if (prevSate.length === 0) {
        setOutfitList([newCard]);
      } else {
        setOutfitList([...prevSate, newCard]);
      }
    }
  };

  return (
    <>
      <h2 id="outfit-carousel-title">Your Outfit</h2>
      <button type="button" onClick={() => { store.deleteAll(); }}>clear storage</button>
      <div id="outfit-carousel">
        <button type="button" id="add-to-outfit-btn" onClick={() => { handleAddToOutfit(); }}>
          <i className="fas fa-plus-square" />
          <br />
          Add To Outfit
        </button>
        <hr id="outfit-carousel-divider" />
        <div id="outfit-card-container">
          {outfitList}
        </div>
      </div>
    </>
  );
};

OutfitCarousel.propTypes = {
  productInfo: propTypes.object.isRequired,
  handleRedirect: propTypes.func.isRequired,
};

export default OutfitCarousel;
