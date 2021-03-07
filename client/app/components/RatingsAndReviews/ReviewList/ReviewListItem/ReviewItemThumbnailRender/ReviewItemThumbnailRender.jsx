/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import ReviewListItemThumbnails from '../ReviewListItemThumbnails/ReviewListItemThumbnails.jsx';

const ReviewItemThumbnailRender = ({ review }) => {
  if (review.photos.length > 0) {
    return (
      <ReviewListItemThumbnails photos={review.photos} />
    );
  }
  return (<></>);
};

export default ReviewItemThumbnailRender;
