import React from 'react';

// eslint-disable-next-line react/prop-types
const StarReview = ({ reviewScore, setMargin = '20px 0 0 0' }) => {
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

  return (
    <div id="container" style={{ margin: setMargin }}>
      <EmptyStars />
      <div id="cover" style={{ width: missingPercent }}> </div>
      <FilledStars />
    </div>
  );
};

const EmptyStars = () => (
  <div className="empty stars">
    <i className="far fa-star" />
    <i className="far fa-star" />
    <i className="far fa-star" />
    <i className="far fa-star" />
    <i className="far fa-star" />
  </div>
);

const FilledStars = () => (
  <div className="full stars">
    <i className="fas fa-star" />
    <i className="fas fa-star" />
    <i className="fas fa-star" />
    <i className="fas fa-star" />
    <i className="fas fa-star" />
  </div>
);

export default StarReview;
