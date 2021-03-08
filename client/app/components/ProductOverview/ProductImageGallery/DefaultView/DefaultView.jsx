import React from 'react';
import propTypes from 'proptypes';
import './DefaultView.css';
// import ProductThumbnailScroll from '../ProductThumbnailScroll/ProductThumbnailScroll.jsx';

const DefaultView = ({ onClickImage, defaultPhoto }) => {
  if (defaultPhoto !== undefined) {
    let image = defaultPhoto.url;
    if (defaultPhoto.url === null && defaultPhoto.thumbnail_url === null) {
      image = 'https://watertownbusinesscoalition.com/assets/images/no_image_available.jpeg';
    }
    return (
      <div className="default-image">
          <img className="display-image" onClick={onClickImage} alt="My Main Product Display" src={image} />
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
