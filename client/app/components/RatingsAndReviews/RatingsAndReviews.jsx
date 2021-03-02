import React, { useState, useEffect } from 'react';
import axios from 'axios';
import propTypes from 'proptypes';
import './RatingsAndReviews.css';
import RatingSummary from './RatingSummary/RatingSummary.jsx';

const RatingsAndReviews = ({ productID, product }) => {
  // set up state
  // track current productID as well as the reviews for that product
  const [reviewList, setReviewList] = useState({});
  const [metaData, setMetaData] = useState({});

  // on component mount, use the productID to fetch reviews from the server
  useEffect(() => {
    if (productID !== 0) {
      axios.get(`/reviews/product/${productID}`)
        .then((response) => {
          setReviewList(response.data.results);
        })
        .catch((err) => {
          console.log('error fetching data on mount: ', err);
        });
      axios.get(`/reviews/meta/${productID}`)
        .then((response) => {
          setMetaData(response.data);
        })
        .catch((err) => {
          console.log('error fetching data on mount: ', err);
        });
    }
  }, [productID]);

  // render container divs
  // breakdown container: avg rating, rating breakdown, product breakdown, % recommended
  // review list container: sort form, review list, more reviews button, add review button

  return (
    // Below are PLACEHOLDER contents within each element
    <>
      <h3 className="header">RATINGS & REVIEWS</h3>
      <div className="ratingsAndReviewsContainer">
        <div className="breakdownContainer">
          <RatingSummary metaData={metaData} className="ratingSummary" />
        </div>
        <div className="reviewListContainer">
          <div className="sortForm">sort form</div>
          <div className="reviewList">review list component</div>
          <div className="buttonsContainer">
            <div className="moreReviewsButton">more reviews button</div>
            <div className="addReviewButton">add new review button</div>
          </div>
        </div>
      </div>
    </>
  );
};

RatingsAndReviews.propTypes = {
  productID: propTypes.number.isRequired,
  product: propTypes.object.isRequired,
};

export default RatingsAndReviews;
