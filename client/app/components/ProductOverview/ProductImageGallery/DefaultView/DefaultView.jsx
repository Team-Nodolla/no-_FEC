import React from 'react';
import './DefaultView.css';

const DefaultView = ({ defaultPhoto }) => (
  <div className='default-image'>
    <img src={defaultPhoto} />
  </div>
);

export default DefaultView;
