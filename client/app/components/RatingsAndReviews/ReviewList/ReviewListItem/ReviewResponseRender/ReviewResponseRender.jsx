import React from 'react';

const ReviewResponseRender = ({ review }) => {
  if (review.response) {
    return (
      <div className="review-response-container">
        <div className="review-response-header">
          Response from seller:
        </div>
        <div className="review-response-body">
          {review.response}
        </div>
      </div>
    );
  }
  return (<></>);
};

export default ReviewResponseRender;
