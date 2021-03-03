import React, { useState } from 'react';
import propTypes from 'proptypes';
import DefaultView from './DefaultView/DefaultView.jsx';
import ExpandedView from './ExpandedView/ExpandedView.jsx';
import './ProductImageGallery.css';
import RightBtn from './right-btn.png';
import LeftBtn from './left-btn.png';

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
              <img alt="Left Button" src={LeftBtn} onClick={onClickLeftChange} className={`image-left-btn-${currentPhoto !== 0 ? `active` : `disabled`}`} />
              <DefaultView
                onClickImage={onClickZoom}
                defaultPhoto={style.photos[currentPhoto]}
              />
              <img alt="Right Button" src={RightBtn} onClick={onClickRightChange} className={`image-right-btn-${currentPhoto !== (style.photos.length - 1) ? `active` : `disabled`}`} />
            </div>
          )
          : (
            <div className="modal">
              <button onClick={onClickZoom}>Exit</button>
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
