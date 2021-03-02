import React from 'react';
import propTypes from 'proptypes';
import DefaultView from './DefaultView/DefaultView.jsx';
import './ProductImageGallery.css';

const ProductImageGallery = ({ photos }) => {
  if (photos !== undefined) {
    return (
      <div>
        <DefaultView defaultPhoto={photos[0].photos[0].url} />
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
