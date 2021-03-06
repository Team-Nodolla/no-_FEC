/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import ReviewResponseRender from '../ReviewResponseRender/ReviewResponseRender.jsx';
import ReviewRecommendRender from '../ReviewRecommendRender/ReviewRecommendRender.jsx';
import ReviewItemThumbnailRender from '../ReviewItemThumbnailRender/ReviewItemThumbnailRender.jsx';

const ReviewBodyRender = ({
  review,
  reviewTileBody,
  reviewBodyButtonClass,
  handleShowMoreBody,
}) => {
  if (review.body.length > 250) {
    return (
      <>
        <div className="reviewListItemBody">
          {reviewTileBody}
          <div className="review-show-body-link">
            <button type="button" className={reviewBodyButtonClass} onClick={handleShowMoreBody}>show more</button>
          </div>
          <ReviewItemThumbnailRender review={review} />
          <ReviewRecommendRender review={review} />
          <ReviewResponseRender review={review} />
        </div>
      </>
    );
  }
  return (
    <div className="reviewListItemBody">
      {reviewTileBody}<br></br>
      <ReviewItemThumbnailRender review={review} />
      <ReviewRecommendRender review={review} />
      <ReviewResponseRender review={review} />
    </div>
  );
};

export default ReviewBodyRender;
