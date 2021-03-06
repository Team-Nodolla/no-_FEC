/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import StarRating from '../../../StarRating/StarRating.jsx';
import ReviewListItemThumbnails from './ReviewListItemThumbnails/ReviewListItemThumbnails.jsx';
import './ReviewListItem.css';

const ReviewListItem = ({ review }) => {
  const [reviewTileBody, setReviewTileBody] = useState(review.body.substring(0, 250));
  const [reviewBodyButtonClass, setReviewBodyButtonClass] = useState('review-show-more-button');

  const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = review.date.slice(5, 7);
  const day = review.date.slice(8, 10);
  const year = review.date.slice(0, 4);
  const formattedString = `${monthArray[month - 1]} ${day}, ${year}`;

  const handleShowMoreBody = () => {
    setReviewTileBody(review.body);
    setReviewBodyButtonClass('review-show-more-button-hidden');
  };

  const ReviewBodyRender = () => {
    if (review.body.length > 250) {
      return (
        <>
          <div className="reviewListItemBody">
            {reviewTileBody}
          </div>
          <div className="review-show-body-link">
            <button type="button" className={reviewBodyButtonClass} onClick={handleShowMoreBody}>show more</button>
          </div>
        </>
      );
    }
    return (
      <div className="reviewListItemBody">
        {reviewTileBody}
      </div>
    );
  };

  const ReviewItemThumbnailRender = () => {
    if (review.photos.length > 0) {
      return (
        <ReviewListItemThumbnails photos={review.photos} />
      );
    }
    return (<></>);
  };

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
      <ReviewBodyRender />
      <ReviewItemThumbnailRender />
    </div>
  );
};


export default ReviewListItem;
