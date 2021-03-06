/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import './ReviewListItemThumbnails.css';

const ReviewListItemThumbnails = ({ photos }) => {
  const [reviewThumbnailWidth, setReviewThumbnailWidth] = useState('40px');
  const [reviewThumbnailHeight, setReviewThumbnailHeight] = useState('30px');
  const [reviewThumbnailModalView, setReviewThumbnailModalView] = useState(false);
  const [reviewTileSelectedImage, setReviewTileSelectedImage] = useState('');

  const modalClassName = reviewThumbnailModalView ? 'review-item-modal review-item-modal-display' : 'review-item-modal review-item-modal-hide';

  const handleImageClick = (e, url) => {
    e.preventDefault();
    setReviewThumbnailModalView(!reviewThumbnailModalView);
    setReviewTileSelectedImage(url);
  };

  if (reviewThumbnailModalView) {
    return (
      <div className={modalClassName}>
        <div className="review-item-modal-main">
          <img src={reviewTileSelectedImage} alt="" onClick={(event) => { handleImageClick(event); }}></img>
        </div>
      </div>
    );
  }

  return photos.map((photo) => (
    <div key={photo.id} className="review-item-thumbnail">
      <img src={photo.url} alt="" width={reviewThumbnailWidth} height={reviewThumbnailHeight} onClick={(event) => { handleImageClick(event, photo.url); }}></img>
      {'  '}
    </div>
  ));
};

export default ReviewListItemThumbnails;
