import React from 'react';
import ReviewCharacteristic from './ReviewCharacteristic.jsx';

const ReviewCharacteristics = ({ metaData, reviewCharsObj, setReviewCharsObj, register }) => {
  // for each characteristic,
  const characteristicArray = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(metaData.characteristics)) {
    // console.log(key, value); // string, object
    characteristicArray.push(
      <div key={value.id}>
        <ReviewCharacteristic
          name={key}
          id={value.id}
          reviewCharsObj={reviewCharsObj}
          setReviewCharsObj={setReviewCharsObj}
          register={register}
        />
      </div>,
    );
  }

  return (
    characteristicArray
  );
};

export default ReviewCharacteristics;
