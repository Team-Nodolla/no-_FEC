/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const ReviewCharacteristic = ({ name, id, reviewCharsObj, setReviewCharsObj }) => {
  // const [sizeCharacteristic, setSizeCharacteristic] = useState(0);
  // const [widthCharacteristic, setWidthCharacteristic] = useState(0);
  // const [comfortCharacteristic, setComfortCharacteristic] = useState(0);
  // const [qualityCharacteristic, setQualityCharacteristic] = useState(0);
  // const [lengthCharacteristic, setLengthCharacteristic] = useState(0);
  // const [fitCharacteristic, setFitCharacteristic] = useState(0);
  const [rowCharSelection, setRowCharSelection] = useState(0);

  const handleSelection = (e) => {
    setRowCharSelection(e.target.value);

    // update parent state
    setReviewCharsObj({ ...reviewCharsObj, [id]: Number(e.target.value) });
  };

  const charObject = {};

  if (name === 'Size') {
    charObject.one = 'A size too small';
    charObject.two = '½ a size too small';
    charObject.three = 'Perfect';
    charObject.four = '½ a size too big';
    charObject.five = 'A size too wide';
  }
  if (name === 'Width') {
    charObject.one = 'Too narrow';
    charObject.two = 'Slightly narrow';
    charObject.three = 'Perfect';
    charObject.four = 'Slightly wide';
    charObject.five = 'Too wide';
  }
  if (name === 'Comfort') {
    charObject.one = 'Uncomfortable';
    charObject.two = 'Slightly uncomfortable';
    charObject.three = 'Ok';
    charObject.four = 'Comfortable';
    charObject.five = 'Perfect';
  }
  if (name === 'Quality') {
    charObject.one = 'Poor';
    charObject.two = 'Below average';
    charObject.three = 'What I expected';
    charObject.four = 'Pretty great';
    charObject.five = 'Perfect';
  }
  if (name === 'Length') {
    charObject.one = 'Runs short';
    charObject.two = 'Runs slightly short';
    charObject.three = 'Perfect';
    charObject.four = 'Runs slightly long';
    charObject.five = 'Runs long';
  }
  if (name === 'Fit') {
    charObject.one = 'Runs tight';
    charObject.two = 'Runs slightly tight';
    charObject.three = 'Perfect';
    charObject.four = 'Runs slightly long';
    charObject.five = 'Runs long';
  }

  const CharExplanationRender = () => {
    if (rowCharSelection !== 0) {
      if (rowCharSelection === '1') {
        return (
          <div className="characteristic-explanation">
            { charObject.one }
          </div>
        );
      }
      if (rowCharSelection === '2') {
        return (
          <div className="characteristic-explanation">
            { charObject.two}
          </div>
        );
      }
      if (rowCharSelection === '3') {
        return (
          <div className="characteristic-explanation">
            { charObject.three}
          </div>
        );
      }
      if (rowCharSelection === '4') {
        return (
          <div className="characteristic-explanation">
            { charObject.four}
          </div>
        );
      }
      if (rowCharSelection === '5') {
        return (
          <div className="characteristic-explanation">
            { charObject.five}
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
