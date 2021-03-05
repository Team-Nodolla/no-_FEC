import React from 'react';
import ReviewCharacteristic from './ReviewCharacteristic.jsx';

const ReviewCharacteristics = ({ metaData }) => {
  // for each characteristic,
  const characteristicArray = [];

  metaData.characteristics.forEach((characteristic) => {
    console.log('characteristic in forEach: ', characteristic);
    characteristicArray.push(
      <ReviewCharacteristic characteristic={characteristic} />
    );
  });
};

export default ReviewCharacteristics;
