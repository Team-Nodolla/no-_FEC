import React, { useState } from 'react';
import axios from 'axios';
import './ReviewItemHelpful.css';

const ReviewItemHelpful = ({ review }) => {
  const [reviewHelpfulClicked, setReviewHelpfulClicked] = useState(false);

  const handleHelpfulClick = (e) => {
    e.preventDefault();
    if (reviewHelpfulClicked === false) {
      axios.put(`/reviews/${review.review_id}/helpful`)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      setReviewHelpfulClicked(true);
      review.helpfulness += 1;
    }
  };

  const handleReportClick = (e) => {
    e.preventDefault();
    axios.put(`/reviews/${review.review_id}/report`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    alert('This review has been reported, and will be hidden from future users')
  };

  return (
    <span className="review-helpfulness">
      Was this review helpful?
      {' '}
      <button type="button" className="review-item-helpful-button" onClick={handleHelpfulClick}>Yes</button>
      {` (${review.helpfulness})  |  `}
      <button type="button" className="review-item-helpful-button" onClick={handleReportClick}>Report</button>
    </span>
  );
};

export default ReviewItemHelpful;
