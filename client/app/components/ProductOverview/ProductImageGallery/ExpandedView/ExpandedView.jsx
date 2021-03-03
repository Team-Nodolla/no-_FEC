import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import './ExpandedView.css';

const ExpandedView = ({ onClickImage, defaultPhoto }) => {
  if (defaultPhoto !== undefined) {
    return (
      <div className="expanded-image">
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
