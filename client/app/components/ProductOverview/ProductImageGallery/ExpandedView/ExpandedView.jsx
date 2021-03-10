import React from 'react';
import propTypes from 'proptypes';
import ReactImageMagnify from 'react-image-magnify';
import ProductThumbnailScroll from '../../ProductThumbnailScroll/ProductThumbnailScroll.jsx';
import './ExpandedView.css';

const ExpandedView = ({
  onClickRightChange,
  onClickChangeThumbnail,
  style,
  currentPhoto,
  defaultPhoto,
}) => {
  if (defaultPhoto !== undefined) {
    return (
      <div className="expanded-image">
        <div className="expanded-product-thumbnail">
          <ProductThumbnailScroll
            onClickRightChange={onClickRightChange}
            onClickChangeThumbnail={onClickChangeThumbnail}
            key={style.style_id}
            currentPhoto={style.photos[currentPhoto].thumbnail_url}
            arrayOfPhoto={style}
          />
        </div>
        <div className="expanded-image-view">
        <i alt="Right Button" onClick={onClickRightChange} className={`expanded-image-right-btn-active fas fa-chevron-right`}></i>
          <ReactImageMagnify {...{
            smallImage: {
              isFluidWidth: true,
              src: defaultPhoto.url,
            },
            largeImage: {
              src: defaultPhoto.url,
              width: 1200,
              height: 1800,
            },
          }}
          />
        </div>
      </div>
    );
  }
  return (
    <div />
  );
};

ExpandedView.propTypes = {
  onClickRightChange: propTypes.func,
  onClickChangeThumbnail: propTypes.func,
  style: propTypes.object,
  currentPhoto: propTypes.number,
  defaultPhoto: propTypes.object,
};

export default ExpandedView;
