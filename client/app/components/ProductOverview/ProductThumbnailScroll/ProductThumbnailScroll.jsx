import React from 'react';
import propTypes from 'proptypes';
import './ProductThumbnailScroll.css';

const ProductThumbnailScroll = ({ onClickChangeThumbnail, currentPhoto, arrayOfPhoto }) => {
  if (arrayOfPhoto !== undefined && currentPhoto !== undefined) {
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

    // return (
    //   <div className="test">
    //     {arrayOfPhoto.photos.map((photo) => {
    //       return (
    //       <div key={photo.thumbnail_url} className="thumbnail-photos">
    //         <img onClick={() => onClickChangeThumbnail(arrayOfPhoto.photos.indexOf(photo))} className={`${currentPhoto === photo.thumbnail_url ? 'selected-image thumbnail-single-photo thumbnail-size' :`thumbnail-single-photo thumbnail-size`}`} src={photo.thumbnail_url} />
    //       </div>
    //       )
    //     })}
    //   </div>
    // );
  }

  return (
    <div />
  );
};

ProductThumbnailScroll.propTypes = {
  currentPhoto: propTypes.string.isRequired,
  arrayOfPhoto: propTypes.object.isRequired,
};

export default ProductThumbnailScroll;