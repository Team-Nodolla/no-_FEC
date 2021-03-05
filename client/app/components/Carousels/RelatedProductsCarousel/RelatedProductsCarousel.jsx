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

  const fetchRelatedProductsData = () => {
    const putInState = [];
    let noDuplicateIDs = [...new Set(relatedProductsIDs)]; // Turn it into an array wit no duplicate IDs
    noDuplicateIDs = noDuplicateIDs.filter((relatedID) => (
      relatedID !== currentProductID
    ));
    console.log('RelatedCarousel noDups:', noDuplicateIDs);
    noDuplicateIDs.forEach((id) => { putInState.push({ id }); });
    Promise.all(noDuplicateIDs.map((id) => (
      axios.get(`/products/${id}`)
    )))
      .then((productsResponses) => {
        productsResponses.forEach((response, index) => {
          // console.log('related product response', response.data);
          putInState[index].name = response.data.name;
          putInState[index].category = response.data.category;
        });
        return Promise.all(noDuplicateIDs.map((id) => (
          axios.get(`/products/${id}/styles`)
        )));
      })
      .then((stylesResponses) => {
        stylesResponses.forEach((response, index) => {
          const defaultStyle = getDefaultStyle(response.data.results);
          console.log('default style response:', defaultStyle);
          putInState[index].productImage = defaultStyle.photos[0].thumbnail_url;
          putInState[index].originalPrice = defaultStyle.original_price;
          putInState[index].salePrice = defaultStyle.sale_price;
        });
        return Promise.all(noDuplicateIDs.map((id) => (
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

  useEffect(() => {
    if (relatedProductsIDs.length > 0) {
      fetchRelatedProductsData();
    }
  }, [relatedProductsIDs]);

  return (
    <>
      <h2 id="related-carousel-title">Related Items</h2>
      <div id="carousel">
        <button type="button" name="previous" id="previous"><i className="fas fa-arrow-left" /></button>
        <div id="products">
          {allRelatedProducts.map((relatedProduct) => (
            <CarouselCard
              key={relatedProduct.id}
              {...relatedProduct}
              buttonFunc={console.log.bind(null, 'click')}
              handleRedirect={handleRedirect}
              carouselType="related"
            />
          ))}
        </div>
        <button type="button" name="next" id="next"><i className="fas fa-arrow-right"></i></button>
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
