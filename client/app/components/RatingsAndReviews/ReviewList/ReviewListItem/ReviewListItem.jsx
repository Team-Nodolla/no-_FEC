/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import StarRating from '../../../StarRating/StarRating.jsx';
import './ReviewListItem.css';

const ReviewListItem = ({ review }) => {
  const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = review.date.slice(5, 7);
  const day = review.date.slice(8, 10);
  const year = review.date.slice(0, 4);
  const formattedString = `${monthArray[month - 1]} ${day}, ${year}`;

  return (
    <div className="reviewListItem">
      <div className="reviewListItemStarRating">
        <StarRating reviewScore={review.rating} setMargin="0 0 0 0" />
        <div className="review-username-date">
          {review.reviewer_name}
          {', '}
          {formattedString}
        </div>
      </div>
      <div className="reviewListItemSummary">
        {review.summary}
      </div>
      <div className="reviewListItemBody">
        {review.body}
      </div>
    </div>
  );
};


export default ReviewListItem;
