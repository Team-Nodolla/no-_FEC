import React from 'react';
import './ProductThumbnailScroll.css';

const ProductThumbnailScroll = ({ arrayOfPhoto }) => {
  if (arrayOfPhoto !== undefined) {
    {console.log('hello', arrayOfPhoto.photos)}
    return (
      <div className="test">
        {arrayOfPhoto.photos.map(photo => {
          return (
          <div className="thumbnail-photos">
            <img className="thumbnail-single-photo thumbnail-size" src={photo.thumbnail_url} />
          </div>
          )
        })}
      </div>
    );
  }

  return (
    <div />
  );
};

export default ProductThumbnailScroll;
