import React from 'react';
import ReviewCharacteristic from './ReviewCharacteristic.jsx';

const ReviewCharacteristics = ({ metaData, reviewCharsObj, setReviewCharsObj }) => {
  // for each characteristic,
  const characteristicArray = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(metaData.characteristics)) {
    console.log(key, value); // sting, object
    characteristicArray.push(
      <ReviewCharacteristic name={key} id={value.id} />,
    );
  }

  return (
    characteristicArray
  );
};

export default ReviewCharacteristics;
