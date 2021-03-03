import React from 'react';
import propTypes from 'proptypes';
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

DefaultView.propTypes = {
  onClickImage: propTypes.func.isRequired,
  defaultPhoto: propTypes.object.isRequired,
};

export default DefaultView;
