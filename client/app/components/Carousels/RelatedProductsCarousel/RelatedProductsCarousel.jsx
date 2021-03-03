/* eslint-disable import/extensions */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import propTypes from 'proptypes';
import averageRating from '../../helperFunctions/getAverageScore.jsx';
import CarouselCard from '../CarouselCard/CarouselCard.jsx';
import './RelatedProductsCarousel.css';

const RelatedProductsCarousel = ({ relatedProductsIDs }) => {
  const [allRelatedProducts, setAllRelatedProducts] = useState([]);

  useEffect(() => {
    if (relatedProductsIDs.length > 0) {
      const putInState = [];
      relatedProductsIDs.forEach((id) => { putInState.push({ id }); });
      Promise.all(relatedProductsIDs.map((id) => (
        axios.get(`/products/${id}`)
      )))
        .then((productsResponses) => {
          productsResponses.forEach((response, index) => {
            putInState[index].name = response.data.name;
            putInState[index].category = response.data.category;
          });
          return Promise.all(relatedProductsIDs.map((id) => (
            axios.get(`/products/${id}/default-style`)
          )));
        })
        .then((stylesResponses) => {
          stylesResponses.forEach((response, index) => {
            putInState[index].productImage = response.data.photos[0].thumbnail_url;
            putInState[index].originalPrice = response.data.original_price;
            putInState[index].salePrice = response.data.sale_price;
          });
          return Promise.all(relatedProductsIDs.map((id) => (
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
    }
  }, [relatedProductsIDs]);

  return (
    <div>
      <h2 id="title">Related Items</h2>
      <div id="carousel">
        <button type="button" name="previous" id="previous"><i className="fas fa-arrow-left"></i></button>
        <div id="products">
          {allRelatedProducts.map((relatedProduct) => (
            <CarouselCard key={relatedProduct.id} {...relatedProduct} buttonFunc={console.log.bind(null, 'click')} />
          ))}
        </div>
        <button type="button" name="next" id="next"><i className="fas fa-arrow-right"></i></button>
      </div>
    </div>
  );
};

RelatedProductsCarousel.propTypes = {
  relatedProductsIDs: propTypes.array.isRequired,
};

export default RelatedProductsCarousel;
