import React, { useState } from 'react';
import propTypes from 'proptypes';
import DefaultView from './DefaultView/DefaultView.jsx';
import './ProductImageGallery.css';

const ProductImageGallery = ({ style }) => {
  if (style !== '') {
    const [currentPhoto, setCurrentPhoto] = useState(0);

    const onClickRightChange = () => {
      console.log('clicked right');
      if (currentPhoto !== style.photos.length - 1) {
        setCurrentPhoto(currentPhoto + 1);
      }
    };
    const onClickLeftChange = () => {
      console.log('clicked left');
      if (currentPhoto > 0) {
        setCurrentPhoto(currentPhoto - 1);
      }
    };

    return (
      <div className="image-gallery-container">
        <button type="submit" onClick={onClickLeftChange}>Left</button>
        <DefaultView defaultPhoto={style.photos[currentPhoto]} />
        <button type="submit" onClick={onClickRightChange}>Right</button>
      </div>
    );
  }
  return (
    <div>
    </div>
  );
};

ProductImageGallery.propTypes = {
  style: propTypes.object.isRequired,
};

export default ProductImageGallery;
