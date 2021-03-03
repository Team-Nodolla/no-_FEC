import React, { useEffect, useState } from 'react';
import StarRating from '../../../StarRating/StarRating.jsx';
import './ReviewListItem.css';

const ReviewListItem = ({ review }) => (
  <div className="reviewListItem">
    <div className="reviewListItemStarRating">
      <StarRating reviewScore={review.rating} setMargin="0 0 0 0" />
    </div>
    <div className="reviewListItemSummary">
      {review.summary}
    </div>
    <div className="reviewListItemBody">
      {review.body}
    </div>
  </div>
);

export default ReviewListItem;
