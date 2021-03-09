import React from 'react';

const RatingBreakdown = ({ metaData }) => {
  let numberOfReviews = 0;
  let ratingValueArray = Object.values(metaData.ratings);
  console.log('ratingValueArray: ', ratingValueArray);
  ratingValueArray.forEach((value) => {
    numberOfReviews += (value * 1);
  });
  console.log('number of reviews after "forEach": ', numberOfReviews);

  const fiveStarValue = Math.round((metaData.ratings["5"] / numberOfReviews) * 100) || 0;
  const fourStarValue = Math.round((metaData.ratings["4"] / numberOfReviews) * 100) || 0;
  const threeStarValue = Math.round((metaData.ratings["3"] / numberOfReviews) * 100) || 0;
  const twoStarValue = Math.round((metaData.ratings["2"] / numberOfReviews) * 100) || 0;
  const oneStarValue = Math.round((metaData.ratings["1"] / numberOfReviews) * 100) || 0;

  return (
    <div className="breakdown-bar-container">
      <div className="rating-brakdown-bar">
        <label htmlFor="breakdown-progress-bar">5 stars</label>
        <progress id="breakdown-progress-bar" value={fiveStarValue} max="100">pogChamp</progress>
      </div>

      <div className="rating-brakdown-bar">
        <label htmlFor="breakdown-progress-bar">4 stars</label>
        <progress id="breakdown-progress-bar" value={fourStarValue} max="100">pogChamp</progress>
      </div>

      <div className="rating-brakdown-bar">
        <label htmlFor="breakdown-progress-bar">3 stars</label>
        <progress id="breakdown-progress-bar" value={threeStarValue} max="100">pogChamp</progress>
      </div>

      <div className="rating-brakdown-bar">
        <label htmlFor="breakdown-progress-bar">2 stars</label>
        <progress id="breakdown-progress-bar" value={twoStarValue} max="100">pogChamp</progress>
      </div>

      <div className="rating-brakdown-bar">
        <label htmlFor="breakdown-progress-bar">1 star</label>
        <progress id="breakdown-progress-bar" value={oneStarValue} max="100">pogChamp</progress>
      </div>
    </div>
  );
};

export default RatingBreakdown;
