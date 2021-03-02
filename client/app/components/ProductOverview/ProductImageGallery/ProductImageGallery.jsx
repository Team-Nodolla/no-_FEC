import React from 'react';
import propTypes from 'proptypes';
import DefaultView from './DefaultView/DefaultView.jsx';
import './ProductImageGallery.css';


const ProductImageGallery = ({ style }) => {
  if (style !== undefined) {
    return (
      <div>
        <DefaultView defaultPhoto={style.photos} />
      </div>
    );
  }
  return (
    <div>
    </div>
  );
};

ProductImageGallery.propTypes = {
  photos: propTypes.array.isRequired,
};
export default ProductImageGallery;
