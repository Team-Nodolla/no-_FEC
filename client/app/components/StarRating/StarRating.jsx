import React from 'react';
import propTypes from 'proptypes';
import './StarRating.css';

const StarRating = ({ reviewScore, setMargin = '20px 0 0 0', darkMode }) => {
  let display;
  if (reviewScore === null) {
    display = <p className="no-reviews">No Reviews For This Product</p>;
  } else {
    // Rounds the score to the nearest quarter
    const roundedScore = Math.round(reviewScore * 4) / 4;

    // Create a solely visual offset so a quarter/3-quarter
    // star *looks* more like a quarter than it actually does
    const testOffset = roundedScore - Math.round(roundedScore);
    let quarterOffset = testOffset === 0.25 || testOffset === -0.25 ? 2.5 : 0;
    // eslint-disable-next-line no-unused-expressions
    testOffset < 0 ? quarterOffset *= -1 : 0;

    // Turn it into a percantage of stars to show
    // This works in "reverse" since it's calculating the percentage
    // of *missing* stars rather than that of showing stars because
    // width extends/shrinks from the left
    const missingPercent = `${100 - roundedScore * 20 - quarterOffset}%`;

    display = (
      <div className="star-rating-container" style={{ margin: setMargin }}>
        <EmptyStars darkMode={darkMode} />
        <div className={darkMode ? 'dark-stars-cover' : 'stars-cover'} style={{ width: missingPercent }}> </div>
        <FilledStars />
      </div>
    );
  }

  return (
    <div>
      { display }
    </div>
  );
};

const EmptyStars = ({ darkMode }) => (
  <div className={`empty-stars stars ${darkMode ? 'dark-empty-stars' : ''}`}>
    <i className="far fa-star star" />
    <i className="far fa-star star" />
    <i className="far fa-star star" />
    <i className="far fa-star star" />
    <i className="far fa-star star" />
  </div>
);

const FilledStars = () => (
  <div className="full-stars stars">
    <i className="fas fa-star star" />
    <i className="fas fa-star star" />
    <i className="fas fa-star star" />
    <i className="fas fa-star star" />
    <i className="fas fa-star star" />
  </div>
);

StarRating.propTypes = {
  reviewScore: propTypes.number,
  setMargin: propTypes.string,
};

export default StarRating;
