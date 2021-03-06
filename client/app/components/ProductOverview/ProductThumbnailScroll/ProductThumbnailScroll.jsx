import React from 'react';
import propTypes from 'proptypes';
import './ProductThumbnailScroll.css';

const ProductThumbnailScroll = ({ onClickChangeThumbnail, currentPhoto, arrayOfPhoto }) => {
  if (arrayOfPhoto !== undefined && currentPhoto !== undefined) {
    if (arrayOfPhoto.photos.length === 1 && currentPhoto === null) {
      return (
        <div />
      );
    }

    return (
      <div className="test">
        {arrayOfPhoto.photos.map((photo) => {
          return (
          <div key={photo.thumbnail_url} className="thumbnail-photos">
            <img onClick={() => onClickChangeThumbnail(arrayOfPhoto.photos.indexOf(photo))} className={`${currentPhoto === photo.thumbnail_url ? 'selected-image  thumbnail-size' :`thumbnail-size`}`} src={photo.thumbnail_url} />
          </div>
          )
        })}
        <button>Down</button>
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
