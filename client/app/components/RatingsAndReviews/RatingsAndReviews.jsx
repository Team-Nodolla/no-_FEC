import React, { useState, useEffect } from 'react';
import axios from 'axios';
import propTypes from 'proptypes';
import './RatingsAndReviews.css';
import RatingSummary from './RatingSummary/RatingSummary.jsx';
import ReviewList from './ReviewList/ReviewList.jsx';

const RatingsAndReviews = ({ productID }) => {
  // set up state
  // track current productID as well as the reviews for that product
  const [reviewList, setReviewList] = useState([]);
  const [metaData, setMetaData] = useState({});
  const [sortOrder, setSortOrder] = useState('relevant');

  // on component mount, use the productID to fetch reviews from the server
  useEffect(() => {
    if (productID !== 0) {
      axios.get(`/reviews/sort/${sortOrder}/product/${productID}`) // set back to productID
        .then((response) => {
          setReviewList(response.data.results);
        })
        .catch((err) => {
          console.log('error fetching data on mount: ', err);
        });
      axios.get(`/reviews/meta/${productID}`) // set back to productID
        .then((response) => {
          setMetaData(response.data);
        })
        .catch((err) => {
          console.log('error fetching data on mount: ', err);
        });
    }
  }, [productID]);

  useEffect(() => {
    axios.get(`/reviews/sort/${sortOrder}/product/${productID}`) // set back to productID
      .then((response) => {
        setReviewList(response.data.results);
      })
      .catch((err) => {
        console.log('error fetching data on mount: ', err);
      });
  }, [sortOrder]);

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
          <form onChange={(event) => { setSortOrder(event.target.value); }} className="sortForm">
            <label htmlFor="sortForm" className="sortFormLabel">Sort on </label>
            <select id="sortForm" name="sortForm" className="sortFormSelect">
              <option value="relevant">relevant</option>
              <option value="helpful">helpful</option>
              <option value="newest">newest</option>
            </select>
          </form>
          <div className="reviewList">
            <ReviewList reviewList={reviewList} />
          </div>
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
