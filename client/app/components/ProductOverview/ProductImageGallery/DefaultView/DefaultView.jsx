import React, { useState } from 'react';
import './DefaultView.css';

const DefaultView = ({ defaultPhoto }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  if (defaultPhoto !== undefined) {
    const onClickRightChange = () => {
      console.log('clicked right');
      if (currentPhoto !== defaultPhoto.length - 1) {
        setCurrentPhoto(currentPhoto + 1);
      }
    };

    const onClickLeftChange = () => {
      console.log('clicked left');
      if (currentPhoto > 0) {
        setCurrentPhoto(currentPhoto - 1);
      }
    };

    console.log(defaultPhoto);

    return (
      <div className='default-image'>
        <button onClick={ onClickLeftChange }>Left</button>
        <img src={defaultPhoto[currentPhoto].url} />
        <button onClick={ onClickRightChange }>Right</button>
      </div>
    );
  }

  return (
    <div></div>
  );
};

export default DefaultView;
