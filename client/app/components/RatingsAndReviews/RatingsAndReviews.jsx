import React, { useState, useEffect } from 'react';
import axios from 'axios';
import propTypes from 'proptypes';
import './RatingsAndReviews.css';
import RatingSummary from './RatingSummary/RatingSummary.jsx';
import ReviewList from './ReviewList/ReviewList.jsx';
import MoreReviewsButton from './ReviewList/ReviewButtonsContainer/MoreReviewsButton/MoreReviewsButton.jsx';
import AddReviewButton from './ReviewList/ReviewButtonsContainer/AddReviewButton/AddReviewButton.jsx';

const RatingsAndReviews = ({ onUserClick, productID, metaData, productName }) => {
  // set up state
  // track current productID as well as the reviews for that product
  const [reviewList, setReviewList] = useState([]);
  const [reviewListStorage, setReviewListStorage] = useState([]);
  const [sortOrder, setSortOrder] = useState('relevant');
  const [visibleReviews, setVisibleReviews] = useState(2);

  // on component mount, use the productID to fetch reviews from the server
  useEffect(() => {
    if (productID) {
      axios.get(`/reviews/sort/${sortOrder}/product/${productID}`) // TODO productID
        .then((response) => {
          setReviewList(response.data.results);
          setReviewListStorage(response.data.results);
        })
        .catch((err) => {
          console.log('error fetching data on mount: ', err);
        });
    }
  }, [productID]);

  useEffect(() => {
    if (productID) {
      axios.get(`/reviews/sort/${sortOrder}/product/${productID}`) // TODO productID
        .then((response) => {
          setReviewList(response.data.results);
          setReviewListStorage(response.data.results);
        })
        .catch((err) => {
          console.log('error fetching data on mount: ', err);
        });
    }
  }, [sortOrder]);

  const handleSortClick = (func) => {
    setReviewList(reviewListStorage.filter(func));
  };

  const MoreReviewsButtonRender = () => {
    if (reviewList.length > visibleReviews) {
      return (
        <MoreReviewsButton
          visibleReviews={visibleReviews}
          setVisibleReviews={setVisibleReviews}
        />
      );
    }
    return (
      <></>
    );
  };

  return (
    <div onClick={() => onUserClick('Ratings And Reviews')}>
      <h3 className="reviews-header">RATINGS & REVIEWS</h3>
      <div className="ratings-and-reviews-container">
        <div className="review-breakdown-container">
          <RatingSummary
            className="review-rating-summary"
            metaData={metaData}
            handleSortClick={handleSortClick}
          />
        </div>

        <div className="review-list-container">
          <form onChange={(event) => { setSortOrder(event.target.value); }} className="sort-form">
            <label htmlFor="sort-form" className="sort-form-label">Sort on </label>
            <select id="sort-form" name="sort-form" className="sort-form-select">
              <option value="relevant">relevant</option>
              <option value="helpful">helpful</option>
              <option value="newest">newest</option>
            </select>
          </form>
          <>
            <ReviewList
              reviewList={reviewList}
              visibleReviews={visibleReviews}
            />
          </>
          <div className="reviewButtonsContainer">
            <MoreReviewsButtonRender />
            <AddReviewButton
              productName={productName}
              productID={productID}
              metaData={metaData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

RatingsAndReviews.propTypes = {
  productID: propTypes.number,
  product: propTypes.object,
  metaData: propTypes.object
};

export default RatingsAndReviews;
