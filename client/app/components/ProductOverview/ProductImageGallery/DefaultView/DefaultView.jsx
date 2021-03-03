import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import './DefaultView.css';

const DefaultView = ({ defaultPhoto }) => {
  if (defaultPhoto !== undefined) {
    return (
      <div className="default-image">
        <div className="image">
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
    <div></div>
  );
};

export default DefaultView;
