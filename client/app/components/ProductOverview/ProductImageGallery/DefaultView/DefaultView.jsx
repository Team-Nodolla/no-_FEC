import React from 'react';
import propTypes from 'proptypes';
import './DefaultView.css';
// import ProductThumbnailScroll from '../ProductThumbnailScroll/ProductThumbnailScroll.jsx';

const DefaultView = ({ onClickImage, defaultPhoto }) => {
  if (defaultPhoto !== undefined) {
    if (defaultPhoto.url === null && defaultPhoto.thumbnail_url === null) {
      defaultPhoto.url = 'https://watertownbusinesscoalition.com/assets/images/no_image_available.jpeg';
      defaultPhoto.thumbnail_url = 'https://watertownbusinesscoalition.com/assets/images/no_image_available.jpeg';
    }
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
