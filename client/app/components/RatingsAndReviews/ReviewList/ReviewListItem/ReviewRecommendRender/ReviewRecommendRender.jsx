import React from 'react';

const ReviewRecommendRender = ({ review }) => {
  if (review.recommend) {
    return (
      <div className="review-item-recommend-container">
        <span>&#10003;</span>
        <span>I recommend this product</span>
      </div>
    );
  }
  return (<></>);
};

export default ReviewRecommendRender;
