import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import ProductThumbnailScroll from '../../ProductThumbnailScroll/ProductThumbnailScroll.jsx';
import './ExpandedView.css';

const ExpandedView = ({ onClickRightChange, onClickChangeThumbnail, style, currentPhoto, onClickImage, defaultPhoto }) => {
  if (defaultPhoto !== undefined) {
    return (
      <div className="expanded-image">
        <div className="expanded-product-thumbnail"><ProductThumbnailScroll onClickRightChange={onClickRightChange} onClickChangeThumbnail={onClickChangeThumbnail} key={style.style_id} currentPhoto={style.photos[currentPhoto].thumbnail_url} arrayOfPhoto={style} />
        </div>
        <div onClick={onClickImage}>
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

export default ExpandedView;
