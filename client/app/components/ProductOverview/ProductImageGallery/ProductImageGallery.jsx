import React, { useState } from 'react';
import propTypes from 'proptypes';
import DefaultView from './DefaultView/DefaultView.jsx';
import ExpandedView from './ExpandedView/ExpandedView.jsx';
import './ProductImageGallery.css';

const ProductImageGallery = ({ style }) => {
  if (style !== '') {
    const toggle = false;
    const [currentPhoto, setCurrentPhoto] = useState(0);
    const [expandView, setExpandView] = useState(toggle);

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
    const onClickZoom = () => {
      console.log('clicked on image', toggle);
      setExpandView((view) => !view);
    };

    return (
      <div>
        {
        expandView === false
          ? (
            <div className="image-container">
              {/* <img
                alt="Left Button"
                src={LeftBtn}
              /> */}
              <button  className={`image-left-btn-${currentPhoto !== 0 ? `active` : `disabled`}`} onClick={onClickLeftChange}>
                <i alt="Left Button" class="fas fa-chevron-left"></i>
              </button>
              <DefaultView
                onClickImage={onClickZoom}
                defaultPhoto={style.photos[currentPhoto]}
              />
              {/* <img
                alt="Right Button"
                src={RightBtn}
                onClick={onClickRightChange}
                className={`image-right-btn-${currentPhoto !== (style.photos.length - 1) ? `active` : `disabled`}`}
              /> */}
      <button  className={`image-right-btn-${currentPhoto !== (style.photos.length - 1) ? `active` : `disabled`}`} onClick={onClickRightChange}>
                <i alt="Right Button" class="fas fa-chevron-right"></i>
              </button>
            </div>
          )
          : (
            <div className="modal">
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
