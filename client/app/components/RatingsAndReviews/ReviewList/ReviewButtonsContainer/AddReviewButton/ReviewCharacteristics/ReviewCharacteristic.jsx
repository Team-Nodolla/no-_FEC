import React from 'react';

const ReviewCharacteristic = ({ name, id }) => {
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
            <input type="radio" name="char-btn-one" value="char-btn-one" checked={true} onChange={() => {}} required />
          </label>{' '}
          <label>
            2
            <input type="radio" name="char-btn-two" value="char-btn-two" checked={false} onChange={() => {}} />
          </label>{' '}
          <label>
            3
            <input type="radio" name="char-btn-three" value="char-btn-three" checked={false} onChange={() => {}} required />
          </label>{' '}
          <label>
            4
            <input type="radio" name="char-btn-four" value="char-btn-four" checked={false} onChange={() => {}} />
          </label>{' '}
          <label>
            5
            <input type="radio" name="char-btn-five" value="char-btn-five" checked={false} onChange={() => {}} required />
          </label>

        </label>
      </div><br></br>
    </>
  )
};

export default ReviewCharacteristic;
