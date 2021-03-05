import React, { useState } from 'react';
import propTypes from 'proptypes';
import DefaultView from './DefaultView/DefaultView.jsx';
import ExpandedView from './ExpandedView/ExpandedView.jsx';
import ProductThumbnailScroll from './ProductThumbnailScroll/ProductThumbnailScroll.jsx';
import './ProductImageGallery.css';

const ProductImageGallery = ({ defaultStyle, style }) => {
  if (style.length !== 0) {
    const toggle = false;
    const [currentPhoto, setCurrentPhoto] = useState(0);
    const [expandView, setExpandView] = useState(toggle);

    const onClickRightChange = () => {
      if (currentPhoto !== style.photos.length - 1) {
        setCurrentPhoto(currentPhoto + 1);
      }
    };

    const onClickLeftChange = () => {
      if (currentPhoto > 0) {
        setCurrentPhoto(currentPhoto - 1);
      }
    };

    const onClickZoom = () => {
      setExpandView((view) => !view);
    };

    const onClickChangeThumbnail = (photo) => {
      setCurrentPhoto(photo);
    };

    return (
      <div>
        <div className="product-thumbnail"><ProductThumbnailScroll onClickChangeThumbnail={onClickChangeThumbnail} key={style.style_id} currentPhoto={style.photos[currentPhoto].thumbnail_url} arrayOfPhoto={style} /></div>
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
  style: propTypes.object
};

export default ProductImageGallery;
