import React, { useState, useEffect } from 'react';
import axios from 'axios';
import propTypes from 'proptypes';
import './RatingsAndReviews.css';
import RatingSummary from './RatingSummary/RatingSummary.jsx';
import ReviewList from './ReviewList/ReviewList.jsx';
import MoreReviewsButton from './ReviewList/ReviewButtonsContainer/MoreReviewsButton/MoreReviewsButton.jsx';
import AddReviewButton from './ReviewList/ReviewButtonsContainer/AddReviewButton/AddReviewButton.jsx';

const RatingsAndReviews = ({ productID, metaData, productName }) => {
  // set up state
  // track current productID as well as the reviews for that product
  const [reviewList, setReviewList] = useState([]);
  const [sortOrder, setSortOrder] = useState('relevant');
  const [visibleReviews, setVisibleReviews] = useState(2);

  // on component mount, use the productID to fetch reviews from the server
  useEffect(() => {
    if (productID) {
      axios.get(`/reviews/sort/${sortOrder}/product/${13034}`) // TODO productID
        .then((response) => {
          setReviewList(response.data.results);
        })
        .catch((err) => {
          console.log('error fetching data on mount: ', err);
        });
    }
  }, [productID]);

  useEffect(() => {
    if (productID) {
      axios.get(`/reviews/sort/${sortOrder}/product/${13034}`) // TODO productID
        .then((response) => {
          setReviewList(response.data.results);
        })
        .catch((err) => {
          console.log('error fetching data on mount: ', err);
        });
    }
  }, [sortOrder]);

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
          <>
            <ReviewList
              reviewList={reviewList}
              visibleReviews={visibleReviews}
            />
          </>
          <div className="buttonsContainer">
            <MoreReviewsButtonRender />
            <AddReviewButton productName={productName} />
          </div>
        </div>
      </div>
    </>
  );
};

RatingsAndReviews.propTypes = {
  productID: propTypes.number,
  product: propTypes.object,
  metaData: propTypes.object
};

export default RatingsAndReviews;
