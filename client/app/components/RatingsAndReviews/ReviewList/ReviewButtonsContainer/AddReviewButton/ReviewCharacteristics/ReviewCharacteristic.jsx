/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { getCharacteristicDescriptions } from '../../../../../helperFunctions/helperFunctions.js';

const ReviewCharacteristic = ({ name, id, reviewCharsObj, setReviewCharsObj }) => {
  const [rowCharSelection, setRowCharSelection] = useState(0);

  const handleSelection = (e) => {
    setRowCharSelection(e.target.value);

    // update parent state
    setReviewCharsObj({ ...reviewCharsObj, [id]: Number(e.target.value) });
  };

  const reviewCharacteristicsObject = getCharacteristicDescriptions(name);

  // if (name === 'Size') {
  //   reviewCharacteristicsObject.one = 'A size too small';
  //   reviewCharacteristicsObject.two = '½ a size too small';
  //   reviewCharacteristicsObject.three = 'Perfect';
  //   reviewCharacteristicsObject.four = '½ a size too big';
  //   reviewCharacteristicsObject.five = 'A size too wide';
  // }
  // if (name === 'Width') {
  //   reviewCharacteristicsObject.one = 'Too narrow';
  //   reviewCharacteristicsObject.two = 'Slightly narrow';
  //   reviewCharacteristicsObject.three = 'Perfect';
  //   reviewCharacteristicsObject.four = 'Slightly wide';
  //   reviewCharacteristicsObject.five = 'Too wide';
  // }
  // if (name === 'Comfort') {
  //   reviewCharacteristicsObject.one = 'Uncomfortable';
  //   reviewCharacteristicsObject.two = 'Slightly uncomfortable';
  //   reviewCharacteristicsObject.three = 'Ok';
  //   reviewCharacteristicsObject.four = 'Comfortable';
  //   reviewCharacteristicsObject.five = 'Perfect';
  // }
  // if (name === 'Quality') {
  //   reviewCharacteristicsObject.one = 'Poor';
  //   reviewCharacteristicsObject.two = 'Below average';
  //   reviewCharacteristicsObject.three = 'What I expected';
  //   reviewCharacteristicsObject.four = 'Pretty great';
  //   reviewCharacteristicsObject.five = 'Perfect';
  // }
  // if (name === 'Length') {
  //   reviewCharacteristicsObject.one = 'Runs short';
  //   reviewCharacteristicsObject.two = 'Runs slightly short';
  //   reviewCharacteristicsObject.three = 'Perfect';
  //   reviewCharacteristicsObject.four = 'Runs slightly long';
  //   reviewCharacteristicsObject.five = 'Runs long';
  // }
  // if (name === 'Fit') {
  //   reviewCharacteristicsObject.one = 'Runs tight';
  //   reviewCharacteristicsObject.two = 'Runs slightly tight';
  //   reviewCharacteristicsObject.three = 'Perfect';
  //   reviewCharacteristicsObject.four = 'Runs slightly long';
  //   reviewCharacteristicsObject.five = 'Runs long';
  // }

  const CharExplanationRender = () => {
    if (rowCharSelection !== 0) {
      if (rowCharSelection === '1') {
        return (
          <div className="characteristic-explanation">
            { reviewCharacteristicsObject.one }
          </div>
        );
      }
      if (rowCharSelection === '2') {
        return (
          <div className="characteristic-explanation">
            { reviewCharacteristicsObject.two}
          </div>
        );
      }
      if (rowCharSelection === '3') {
        return (
          <div className="characteristic-explanation">
            { reviewCharacteristicsObject.three}
          </div>
        );
      }
      if (rowCharSelection === '4') {
        return (
          <div className="characteristic-explanation">
            { reviewCharacteristicsObject.four}
          </div>
        );
      }
      if (rowCharSelection === '5') {
        return (
          <div className="characteristic-explanation">
            { reviewCharacteristicsObject.five}
          </div>
        );
      }
    }
    return (
      <></>
    );
  };

  return (
    <>
      <CharExplanationRender />
      <div className="radio">
        <label>
          {name}*:{' '}
          <label>
            1
            <input type="radio" name={id} value={1} checked={rowCharSelection === '1'} onChange={handleSelection} required />
          </label>{' '}
          <label>
            2
            <input type="radio" name={id} value={2} checked={rowCharSelection === '2'} onChange={handleSelection} />
          </label>{' '}
          <label>
            3
            <input type="radio" name={id} value={3} checked={rowCharSelection === '3'} onChange={handleSelection} required />
          </label>{' '}
          <label>
            4
            <input type="radio" name={id} value={4} checked={rowCharSelection === '4'} onChange={handleSelection} />
          </label>{' '}
          <label>
            5
            <input type="radio" name={id} value={5} checked={rowCharSelection === '5'} onChange={handleSelection} required />
          </label>

        </label>
      </div><br></br>
    </>
  )
};

export default ReviewCharacteristic;
