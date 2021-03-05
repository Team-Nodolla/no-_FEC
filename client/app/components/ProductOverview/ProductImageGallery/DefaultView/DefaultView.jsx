import React from 'react';
import propTypes from 'proptypes';
import './DefaultView.css';
// import ProductThumbnailScroll from '../ProductThumbnailScroll/ProductThumbnailScroll.jsx';

const DefaultView = ({ onClickRightChange, onClickChangeThumbnail, style, currentPhoto, onClickImage, defaultPhoto }) => {
  if (defaultPhoto !== undefined) {
    return (
      <div className="default-image">
        {/* <div className="product-thumbnail"><ProductThumbnailScroll onClickRightChange={onClickRightChange} onClickChangeThumbnail={onClickChangeThumbnail} key={style.style_id} currentPhoto={style.photos[currentPhoto].thumbnail_url} arrayOfPhoto={style} />
        </div> */}
          <img className="display-image" onClick={onClickImage} alt="My Main Product Display" src={defaultPhoto.url} />
      </div>
    );
  }
  return (
    <div />
  );
};

DefaultView.propTypes = {
  onClickImage: propTypes.func.isRequired,
  defaultPhoto: propTypes.object.isRequired,
};

export default DefaultView;
