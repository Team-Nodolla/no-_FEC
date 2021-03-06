/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/extensions */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import propTypes from 'proptypes';
import averageRating from '../../helperFunctions/getAverageRating.jsx';
import getDefaultStyle from '../../helperFunctions/getDefaultStyle.jsx';
import CarouselCard from '../CarouselCard/CarouselCard.jsx';
import './RelatedProductsCarousel.css';

const RelatedProductsCarousel = ({ currentProductID, relatedProductsIDs = [], handleRedirect }) => {
  const [allRelatedProducts, setAllRelatedProducts] = useState([]);

  useEffect(() => {
    if (relatedProductsIDs.length > 0) {
      fetchRelatedProductsData();
    }
  }, [relatedProductsIDs]);

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
          putInState[index].stars = averageRating(ratings);
        });
        setAllRelatedProducts(putInState);
      })
      .catch((err) => {
        setAllRelatedProducts(putInState);
        console.error(err);
      });
  };

  const cardTemplate = (cardDetails) => (
    <CarouselCard
      key={cardDetails.id}
      {...cardDetails}
      buttonFunc={console.log.bind(null, 'click')}
      handleRedirect={handleRedirect}
      carouselType="related"
    />
  );

  return (
    <>
      <h2 id="related-carousel-title">Related Items</h2>
      <div id="carousel">
        <button type="button" name="previous" id="previous">
          <i className="fas fa-arrow-left" />
        </button>
        <div id="products">
          {allRelatedProducts.map((relatedProduct) => (
            cardTemplate(relatedProduct)
          ))}
        </div>
        <button type="button" name="next" id="next">
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    </>
  );
};

RelatedProductsCarousel.propTypes = {
  currentProductID: propTypes.number.isRequired,
  handleRedirect: propTypes.func.isRequired,
  relatedProductsIDs: propTypes.array,
};

export default RelatedProductsCarousel;
