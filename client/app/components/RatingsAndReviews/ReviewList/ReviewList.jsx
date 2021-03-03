import React, { useEffect, useState } from 'react';
import propTypes from 'proptypes';
import ReviewListItem from './ReviewListItem/ReviewListItem.jsx';
import './ReviewList.css';

const ReviewList = ({ reviewList }) => {
  const [visibleReviews, setVisibleReviews] = useState(2);
  // const [reviewElements, setReviewElements] = useState([]);
  let reviewsArray = [];

  reviewList.map((review) => {
    reviewsArray.push(<ReviewListItem review={review} />);
  });

  console.log('reviews array: ', reviewsArray);

  return (
    <div className="reviewListItemContainer">
      {reviewsArray}
    </div>
  );
};

ReviewList.propTypes = {
  reviewList: propTypes.array,
};

export default ReviewList;
