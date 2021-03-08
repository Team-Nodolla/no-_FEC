/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/extensions */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import propTypes from 'proptypes';
import { getAverageRating, getDefaultStyle } from '../../helperFunctions/helperFunctions.js';
import CarouselCard from '../CarouselCard/CarouselCard.jsx';
import ComparisonWindow from './ComparisonWindow/ComparisonWindow.jsx';
import NextButton from '../CarouselButtons/CarouselNextButton.jsx';
import BackButton from '../CarouselButtons/CarouselBackButton.jsx';
import './RelatedProductsCarousel.css';

const RelatedProductsCarousel = (
  {
    currentProductID = 0,
    currentProductName = '',
    currentProductFeatures = [],
    relatedProductsIDs = [],
    handleRedirect,
  },
) => {
  const [allRelatedProducts, setAllRelatedProducts] = useState([]);
  const [compareModalData, setCompareModalData] = useState(
    {
      displayModal: false,
      currentProductName,
      currentProductFeatures,
      relatedProductName: '',
      relatedProductFeatures: [],
    },
  );
  const [currentlyDisplayed, setCurrentlyDisplayed] = useState(
    {
      start: 0,
      atStart: true,
      end: 0,
      atEnd: true,
      cards: [],
    },
  );

  useEffect(() => {
    if (relatedProductsIDs.length > 0) {
      fetchRelatedProductsData();
    }
  }, [relatedProductsIDs]);

  useEffect(() => {
    if (allRelatedProducts.length > 0) {
      const { start, atStart } = currentlyDisplayed;
      let { end, atEnd, cards } = currentlyDisplayed;
      end = Math.min(3, allRelatedProducts.length - 1);
      atEnd = (end === allRelatedProducts.length - 1);
      cards = allRelatedProducts.filter((card, index) => (
        index <= end
      ));
      setCurrentlyDisplayed({ start, atStart, end, atEnd, cards });
    }
  }, [allRelatedProducts.length]);

  useEffect(() => {
    setCompareModalData({
      ...compareModalData,
      currentProductName,
      currentProductFeatures,
    });
  }, [currentProductName]);

  const fetchRelatedProductsData = () => {
    const putInState = [];
    let uniqueIDs = [...new Set(relatedProductsIDs)]; // Turn it into an array wit no duplicate IDs
    uniqueIDs = uniqueIDs.filter((relatedID) => (
      relatedID !== currentProductID
    ));
    uniqueIDs.forEach((id) => { putInState.push({ id }); });
    Promise.all(uniqueIDs.map((id) => (
      axios.get(`/products/${id}`)
    )))
      .then((productsResponses) => {
        productsResponses.forEach((response, index) => {
          putInState[index].name = response.data.name;
          putInState[index].category = response.data.category;
          putInState[index].features = response.data.features;
        });
        return Promise.all(uniqueIDs.map((id) => (
          axios.get(`/products/${id}/styles`)
        )));
      })
      .then((stylesResponses) => {
        stylesResponses.forEach((response, index) => {
          const defaultStyle = getDefaultStyle(response.data.results);
          putInState[index].productImage = defaultStyle.photos[0].thumbnail_url;
          putInState[index].originalPrice = defaultStyle.original_price;
          putInState[index].salePrice = defaultStyle.sale_price;
        });
        return Promise.all(uniqueIDs.map((id) => (
          axios.get(`/reviews/meta/${id}`)
        )));
      })
      .then((reviewsResponses) => {
        reviewsResponses.forEach((response, index) => {
          const { ratings } = response.data;
          putInState[index].reviewScore = getAverageRating(ratings);
        });
        setAllRelatedProducts(putInState);
      })
      .catch((err) => {
        setAllRelatedProducts(putInState);
        console.error(err);
      });
  };

  const handleActionButton = (id, name, features) => {
    let { displayModal, relatedProductName, relatedProductFeatures } = compareModalData;
    displayModal = !displayModal;
    relatedProductName = name;
    relatedProductFeatures = features;
    setCompareModalData({
      ...compareModalData,
      displayModal,
      relatedProductName,
      relatedProductFeatures,
    });
  };

  const handleNext = () => {
    if (currentlyDisplayed.end < allRelatedProducts.length - 1) {
      let { start, atStart, end, atEnd, cards } = currentlyDisplayed;
      start += 1;
      end += 1;
      atStart = false;
      atEnd = end === allRelatedProducts.length - 1;
      cards = allRelatedProducts.slice(start, end + 1);
      setCurrentlyDisplayed({ start, atStart, end, atEnd, cards });
    }
  };

  const handleBack = () => {
    if (currentlyDisplayed.start > 0) {
      let { start, atStart, end, atEnd, cards } = currentlyDisplayed;
      start -= 1;
      end -= 1;
      atStart = start === 0;
      atEnd = end === allRelatedProducts.length - 1;
      cards = allRelatedProducts.slice(start, end + 1);
      setCurrentlyDisplayed({ start, atStart, end, atEnd, cards });
    }
  };

  const cardTemplate = (cardDetails) => (
    <CarouselCard
      key={cardDetails.id}
      {...cardDetails}
      handleActionButton={handleActionButton}
      handleRedirect={handleRedirect}
      carouselType="related"
    />
  );

  return (
    <>
      <h2 id="related-carousel-title">Related Items</h2>
      <div
        id="related-carousel"
        onClick={() => { setCompareModalData({ ...compareModalData, displayModal: false }); }}
      >
        <BackButton atStart={currentlyDisplayed.atStart} handleBack={handleBack} />
        <ComparisonWindow { ...compareModalData } />
        <hr className="outfit-carousel-divider" />
        <div id="related-card-container">
          {currentlyDisplayed.cards.map((displayedProduct) => (
            cardTemplate(displayedProduct)
          ))}
        </div>
        <hr className="outfit-carousel-divider" />
        <NextButton atEnd={currentlyDisplayed.atEnd} handleNext={handleNext} />
      </div>
    </>
  );
};

RelatedProductsCarousel.propTypes = {
  currentProductID: propTypes.number.isRequired,
  currentProductName: propTypes.string.isRequired,
  currentProductFeatures: propTypes.array.isRequired,
  handleRedirect: propTypes.func.isRequired,
  relatedProductsIDs: propTypes.array.isRequired,
};

export default RelatedProductsCarousel;
