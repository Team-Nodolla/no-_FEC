/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import propTypes from 'proptypes';
import './RatingsAndReviews.css';
import RatingSummary from './RatingSummary/RatingSummary.jsx';
import ReviewList from './ReviewList/ReviewList.jsx';
import MoreReviewsButton from './ReviewList/ReviewButtonsContainer/MoreReviewsButton/MoreReviewsButton.jsx';
import AddReviewButton from './ReviewList/ReviewButtonsContainer/AddReviewButton/AddReviewButton.jsx';

const RatingsAndReviews = ({ onUserClick, productID, metaData, productName, setCurrentProductReviews }) => {
  // set up state
  // track current productID as well as the reviews for that product
  const [reviewList, setReviewList] = useState([]);
  const [reviewListStorage, setReviewListStorage] = useState([]);
  const [sortOrder, setSortOrder] = useState('relevant');
  const [visibleReviews, setVisibleReviews] = useState(2);
  const [listIsFiltered, setListIsFiltered] = useState(false);
  const [breakdownSortObj, setBreakdownSortObj] = useState({ 1: false, 2: false, 3: false, 4: false, 5: false, })

  // on component mount, use the productID to fetch reviews from the server
  useEffect(() => {
    if (productID) {
      axios.get(`/reviews/sort/${sortOrder}/product/${productID}`) // TODO productID
        .then((response) => {
          setReviewList(additiveSortFilter(response.data.results));
          setReviewListStorage(response.data.results);
          setCurrentProductReviews(response.data);
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
          setReviewList(additiveSortFilter(response.data.results));
          setReviewListStorage(response.data.results);
        })
        .catch((err) => {
          console.log('error fetching data on mount: ', err);
        });
    }
  }, [sortOrder]);

  useEffect(() => {
    setReviewList(additiveSortFilter(reviewListStorage));
  }, [breakdownSortObj]);

  const handleSortClick = (number) => {
    setBreakdownSortObj({ ...breakdownSortObj, [number]: !breakdownSortObj[number] });
    setListIsFiltered(true);
  };

  const handleRemoveFilterClick = (e) => {
    e.preventDefault();
    setBreakdownSortObj({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
    }); // potentially needs change?
    setReviewList(reviewListStorage);
    setListIsFiltered(false);
  };

  const additiveSortFilter = (reviews) => {
    let isSorted = breakdownSortObj;
    if (breakdownSortObj[1] === false && breakdownSortObj[2] === false && breakdownSortObj[3] === false && breakdownSortObj[4] === false && breakdownSortObj[5] === false) {
      isSorted = {
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
      };
    }
    const filteredReviews = [];
    for (let i = 0; i < reviews.length; i += 1) {
      if (isSorted[reviews[i].rating]) {
        filteredReviews.push(reviews[i]);
      }
    }
    return filteredReviews;
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

  const RemoveAllFiltersRender = () => {
    if (listIsFiltered) {
      return (
        <button type="button" className="remove-review-filters-button" onClick={handleRemoveFilterClick}>Remove all filters</button>
      );
    }
    return (<></>);
  };

  return (
    // <div onClick={(e) => onUserClick(e, "Rating and Reviews")}>
    <div>
      <h3 className="reviews-header">RATINGS & REVIEWS</h3>
      <div className="ratings-and-reviews-container">
        <div className="review-breakdown-container">
          <RatingSummary
            className="review-rating-summary"
            metaData={metaData}
            handleSortClick={handleSortClick}
            RemoveAllFiltersRender={RemoveAllFiltersRender}
            breakdownSortObj={breakdownSortObj}
            setBreakdownSortObj={setBreakdownSortObj}
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
              MoreReviewsButtonRender={MoreReviewsButtonRender}
              productName={productName}
              productID={productID}
              metaData={metaData}
            />
          </>
          <div className="reviewButtonsContainer">
            <AddReviewButton
              productName={productName}
              productID={productID}
              metaData={metaData}
            />
            <MoreReviewsButtonRender />
          </div>
        </div>
      </div>
    </div>
  );
};

RatingsAndReviews.propTypes = {
  onUserClick: propTypes.func,
  productID: propTypes.number,
  product: propTypes.object,
  metaData: propTypes.object
};

export default RatingsAndReviews;
