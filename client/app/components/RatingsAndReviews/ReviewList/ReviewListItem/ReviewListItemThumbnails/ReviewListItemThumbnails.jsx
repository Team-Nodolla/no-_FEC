/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';

const ReviewListItemThumbnails = ({ photos }) => {
  const [reviewThumbnailWidth, setReviewThumbnailWidth] = useState("40px");
  const [reviewThumbnailHeight, setReviewThumbnailHeight] = useState("30px");

  return photos.map((photo) => (
    <>
      <img src={photo.url} alt="" width={reviewThumbnailWidth} height={reviewThumbnailHeight}></img>
    </>
  ));
};

export default ReviewListItemThumbnails;
