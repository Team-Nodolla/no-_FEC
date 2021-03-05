import React from 'react';
import ReviewCharacteristic from './ReviewCharacteristic.jsx';

const ReviewCharacteristics = ({ metaData, reviewCharsObj, setReviewCharsObj }) => {
  // for each characteristic,
  const characteristicArray = [];

  for (const [key, value] of Object.entries(metaData.characteristics)) {
    console.log(key, value) // sting, object
    characteristicArray.push(
      <ReviewCharacteristic name={key} id={value.id} />
    )
  }

  return (
    characteristicArray
  )

  // .forEach((characteristic) => {
  //   console.log('characteristic in forEach: ', characteristic);
  //   characteristicArray.push(
  //     <ReviewCharacteristic characteristic={characteristic} />
  //   );
  // });
};

export default ReviewCharacteristics;
