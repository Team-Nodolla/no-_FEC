/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';

const ReviewListItemThumbnails = ({ photos, modalView }) => {
  const [reviewThumbnailWidth, setReviewThumbnailWidth] = useState("40px");
  const [reviewThumbnailHeight, setReviewThumbnailHeight] = useState("30px");
  const [reviewThumbnailModalView, setReviewThumbnailModalView] = useState(false);
  const [reviewTileSelectedImage, setReviewTileSelectedImage] = useState('');

  const modalClassName = modalView ? "review-item-modal review-item-modal-display" : "review-item-modal review-item-modal-hide";

  const handleImageClick = (url) => {
    setReviewThumbnailModalView(!reviewThumbnailModalView);
    setReviewTileSelectedImage(url);
  };

  if (reviewThumbnailModalView) {
    return (
      <div className={modalClassName}>
        <div className="review-item-modal-main">
          <img src={reviewTileSelectedImage} alt="" onClick={() => { handleImageClick() }}></img>
        </div>
      </div>
    );
  }

  return photos.map((photo) => (
    <>
      <img src={photo.url} alt="" width={reviewThumbnailWidth} height={reviewThumbnailHeight} onClick={() => { handleImageClick(photo.url) }}></img>
    </>
  ));
};

export default ReviewListItemThumbnails;
