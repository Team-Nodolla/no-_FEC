import React from 'react';

const MoreReviewsButton = ({ visibleReviews, setVisibleReviews}) => (
  <button onClick={() => setVisibleReviews(visibleReviews + 2)} type="button" className="moreReviewsButton">more reviews</button>
);

export default MoreReviewsButton;
