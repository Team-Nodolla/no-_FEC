import React from 'react';
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
              <DefaultView
                onClickImage={onClickZoom}
                defaultPhoto={style.photos[currentPhoto]}
              />
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
  expandView: propTypes.bool,
  currentPhoto: propTypes.number,
  onClickZoom: propTypes.func,
  onClickChangeThumbnail: propTypes.func,
  onClickLeftChange: propTypes.func,
  onClickRightChange: propTypes.func,
  style: propTypes.object
};

export default ProductImageGallery;
