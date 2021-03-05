/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const ReviewCharacteristic = ({ name, id, reviewCharsObj, setReviewCharsObj }) => {
  const [sizeCharacteristic, setSizeCharacteristic] = useState(0);
  const [widthCharacteristic, setWidthCharacteristic] = useState(0);
  const [comfortCharacteristic, setComfortCharacteristic] = useState(0);
  const [qualityCharacteristic, setQualityCharacteristic] = useState(0);
  const [lengthCharacteristic, setLengthCharacteristic] = useState(0);
  const [fitCharacteristic, setFitCharacteristic] = useState(0);

  let handleSelection = () => {
  };

  if (name === 'Size') {
    let one = 'A size too small';
    let two = '½ a size too small';
    let three = 'Perfect';
    let four = '½ a size too big';
    let five = 'A size too wide';
  }
  if (name === 'Width') {
    let one = 'Too narrow';
    let two = 'Slightly narrow';
    let three = 'Perfect';
    let four = 'Slightly wide';
    let five = 'Too wide';
  }
  if (name === 'Comfort') {
    let one = 'Uncomfortable';
    let two = 'Slightly uncomfortable';
    let three = 'Ok';
    let four = 'Comfortable';
    let five = 'Perfect';
  }
  if (name === 'Quality') {
    let one = 'Poor';
    let two = 'Below average';
    let three = 'What I expected';
    let four = 'Pretty great';
    let five = 'Perfect';
    handleSelection = (e) => {
      setQualityCharacteristic(e.target.value);
      setReviewCharsObj({ ...reviewCharsObj, [id]: Number(e.target.value) });
    };
  }
  if (name === 'Length') {
    let one = 'Runs short';
    let two = 'Runs slightly short';
    let three = 'Perfect';
    let four = 'Runs slightly long';
    let five = 'Runs long';
  }
  if (name === 'Fit') {
    let one = 'Runs tight';
    let two = 'Runs slightly tight';
    let three = 'Perfect';
    let four = 'Runs slightly long';
    let five = 'Runs long';
  }

  return (
    <>
      <div className="radio">
        <label>
          {name}*:{' '}
          <label>
            1
            <input type="radio" name="char-btn-one" value={1} checked={qualityCharacteristic === '1'} onChange={handleSelection} required />
          </label>{' '}
          <label>
            2
            <input type="radio" name="char-btn-two" value={2} checked={qualityCharacteristic === '2'} onChange={handleSelection} />
          </label>{' '}
          <label>
            3
            <input type="radio" name="char-btn-three" value={3} checked={qualityCharacteristic === '3'} onChange={handleSelection} required />
          </label>{' '}
          <label>
            4
            <input type="radio" name="char-btn-four" value={4} checked={qualityCharacteristic === '4'} onChange={handleSelection} />
          </label>{' '}
          <label>
            5
            <input type="radio" name="char-btn-five" value={5} checked={qualityCharacteristic === '5'} onChange={handleSelection} required />
          </label>

        </label>
      </div><br></br>
    </>
  )
};

export default ReviewCharacteristic;
