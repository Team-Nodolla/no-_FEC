import React, { useState } from 'react';
import propTypes from 'proptypes';
import DefaultView from './DefaultView/DefaultView.jsx';
import ExpandedView from './ExpandedView/ExpandedView.jsx';
import ProductThumbnailScroll from './ProductThumbnailScroll/ProductThumbnailScroll.jsx';
import './ProductImageGallery.css';

const ProductImageGallery = ({ style }) => {
  if (Object.keys(style).length !== 0) {
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

    return (
      <div>
        <div className="product-thumbnail"><ProductThumbnailScroll currentPhoto={style.photos[currentPhoto].thumbnail_url} arrayOfPhoto={style} /></div>
        {
        expandView === false
          ? (
            <div className="image-container">
              <i className={`image-left-btn-${currentPhoto !== 0 ? `active` : `disabled`} fas fa-chevron-left`} onClick={onClickLeftChange} alt="Left Button"></i>
              <DefaultView
                onClickImage={onClickZoom}
                defaultPhoto={style.photos[currentPhoto]}
              />
                <i className={`image-right-btn-${currentPhoto !== (style.photos.length - 1) ? `active` : `disabled`} fas fa-chevron-right`} onClick={onClickRightChange}alt="Right Button"></i>
            </div>
          )
          : (
            <div onClickImage={onClickZoom} className="modal">
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
  style: propTypes.object.isRequired,
};

export default ProductImageGallery;
