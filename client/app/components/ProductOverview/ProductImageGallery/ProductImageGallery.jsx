import React, { useState, useEffect } from 'react';
import propTypes from 'proptypes';
import DefaultView from './DefaultView/DefaultView.jsx';
import ExpandedView from './ExpandedView/ExpandedView.jsx';
// import ProductThumbnailScroll from './ProductThumbnailScroll/ProductThumbnailScroll.jsx';
import './ProductImageGallery.css';

const ProductImageGallery = ({
  expandView,
  currentPhoto,
  onClickZoom,
  onClickChangeThumbnail,
  onClickLeftChange,
  onClickRightChange,
  style,
}) => {
  if (style.length !== 0) {
    return (
      <div>
        {
        expandView === false
          ? (
            <div className="image-container">
              <i alt="Left Button" onClick={onClickLeftChange} className={`image-left-btn-${currentPhoto !== 0 ? `active` : `disabled`} fas fa-chevron-left`}></i>
              <DefaultView
                onClickImage={onClickZoom}
                defaultPhoto={style.photos[currentPhoto]}
              />
              <i alt="Right Button" onClick={onClickRightChange} className={`image-right-btn-${currentPhoto !== (style.photos.length - 1) ? `active` : `disabled`} fas fa-chevron-right`}></i>
            </div>
          )
          : (
            <div onClickImage={onClickZoom} className="product-expanded-modal">
              <ExpandedView
                onClickRightChange={onClickRightChange}
                style={style}
                onClickChangeThumbnail={onClickChangeThumbnail}
                currentPhoto={currentPhoto}
                onClickImage={onClickZoom}
                defaultPhoto={style.photos[currentPhoto]}
              />
            </div>
          )
        }
      </div>
    );
  }
  return (
    <div />
  );
};

ProductImageGallery.propTypes = {
  expandView: propTypes.boolean,
  currentPhoto: propTypes.number,
  onClickZoom: propTypes.func,
  onClickChangeThumbnail: propTypes.func,
  onClickLeftChange: propTypes.func,
  onClickRightChange: propTypes.func,
  style: propTypes.object
};

export default ProductImageGallery;
