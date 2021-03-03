import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import './DefaultView.css';

const DefaultView = ({ onClickImage, defaultPhoto }) => {
  if (defaultPhoto !== undefined) {
    return (
      <div className="default-image">
          <img className="display-image" onClick={onClickImage} alt="My Main Product Display" src={defaultPhoto.url} />
      </div>
    );
  }
  return (
    <div />
  );
};

export default DefaultView;
