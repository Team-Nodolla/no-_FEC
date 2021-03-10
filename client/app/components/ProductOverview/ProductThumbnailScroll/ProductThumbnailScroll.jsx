import React from 'react';
import propTypes from 'proptypes';
import './ProductThumbnailScroll.css';

const ProductThumbnailScroll = ({ onClickChangeThumbnail, currentPhoto, arrayOfPhoto }) => {
  if (arrayOfPhoto !== undefined && currentPhoto !== undefined) {
    console.log(currentPhoto);
    let counter = 0;
    if (arrayOfPhoto.photos.length === 1 && currentPhoto === null) {
      return (
        <div className="empty-thumbnail" />
      );
    }
    return (
      <div className="test">
        {arrayOfPhoto.photos.map((photo) => {
          return (
          <div key={counter++} className="thumbnail-photos">
            <img onClick={() => onClickChangeThumbnail(arrayOfPhoto.photos.indexOf(photo))} className={`${arrayOfPhoto.photos.indexOf(photo) === currentPhoto ? 'selected-image  thumbnail-size' :`thumbnail-size`}`} src={photo.thumbnail_url} />
          </div>
          )
        })}
      </div>
    );
  }
};

ProductThumbnailScroll.propTypes = {
  onClickChangeThumbnail: propTypes.func,
  currentPhoto: propTypes.string,
  arrayOfPhoto: propTypes.object,
};

export default ProductThumbnailScroll;
