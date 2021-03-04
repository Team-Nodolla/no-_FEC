/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import propTypes from 'proptypes';
import CarouselCard from '../CarouselCard/CarouselCard.jsx';
import store from './storeAPI.jsx';
import './OutfitCarousel.css';

const OutfitCarousel = ({ productInfo, handleRedirect }) => {
  const [outfitList, setOutfitList] = useState([]);

  // on Mount
  useEffect(() => {
    if (productInfo.id !== 0) {
      const outfitsInStore = [];
      console.log(store.getAll());
      store.getAll().forEach((item) => {
        outfitsInStore.push(
          <CarouselCard
            key={item.id}
            {...item}
            handleRedirect={handleRedirect}
            buttonFunc={console.log.bind(null, 'click')}
            carouselType="outfit"
          />,
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
      const newCard = (
        <CarouselCard
          {...productInfo}
          handleRedirect={handleRedirect}
          buttonFunc={console.log.bind(null, 'click')}
          carouselType="outfit"
        />
      );
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
        <div id="outfit-card-container">
          {outfitList}
        </div>
      </div>
    </>
  );
};

OutfitCarousel.propTypes = {
  productInfo: propTypes.object,
};

export default OutfitCarousel;
