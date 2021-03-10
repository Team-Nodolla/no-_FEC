/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './RatingBreakdown.css';

const RatingBreakdown = ({ metaData, handleSortClick }) => {
  let numberOfReviews = 0;
  let ratingValueArray = Object.values(metaData.ratings);

  ratingValueArray.forEach((value) => {
    numberOfReviews += (value * 1);
  });

  const filterFiveStarReviews = (review) => {
    return review.rating == '5'
  }
  const filterFourStarReviews = (review) => {
    return review.rating == '4'
  }
  const filterThreeStarReviews = (review) => {
    return review.rating == '3'
  }
  const filterTwoStarReviews = (review) => {
    return review.rating == '2'
  }
  const filterOneStarReviews = (review) => {
    return review.rating == '1'
  }

  const fiveStarValue = Math.round((metaData.ratings["5"] / numberOfReviews) * 100) || 0;
  const fourStarValue = Math.round((metaData.ratings["4"] / numberOfReviews) * 100) || 0;
  const threeStarValue = Math.round((metaData.ratings["3"] / numberOfReviews) * 100) || 0;
  const twoStarValue = Math.round((metaData.ratings["2"] / numberOfReviews) * 100) || 0;
  const oneStarValue = Math.round((metaData.ratings["1"] / numberOfReviews) * 100) || 0;

  return (
    // <div className="breakdown-bar-container">
    <>
      <div className="rating-breakdown-bar" onClick={() => { handleSortClick(filterFiveStarReviews); }}>
        <label htmlFor="breakdown-progress-bar">5 stars</label>
        {' '}
        <progress name="breakdown-progress-bar" className="breakdown-progress-bar" value={fiveStarValue} max="100">pogChamp</progress>
        {` ${metaData.ratings["5"] || 0}`}
      </div>

      <div className="rating-breakdown-bar" onClick={() => { handleSortClick(filterFourStarReviews); }}>
        <label htmlFor="breakdown-progress-bar">4 stars</label>
        {' '}
        <progress name="breakdown-progress-bar" className="breakdown-progress-bar" value={fourStarValue} max="100">pogChamp</progress>
        {` ${metaData.ratings["4"] || 0}`}
      </div>

      <div className="rating-breakdown-bar" onClick={() => { handleSortClick(filterThreeStarReviews); }}>
        <label htmlFor="breakdown-progress-bar">3 stars</label>
        {' '}
        <progress name="breakdown-progress-bar" className="breakdown-progress-bar" value={threeStarValue} max="100">pogChamp</progress>
        {` ${metaData.ratings["3"] || 0}`}
      </div>

      <div className="rating-breakdown-bar" onClick={() => { handleSortClick(filterTwoStarReviews); }}>
        <label htmlFor="breakdown-progress-bar">2 stars</label>
        {' '}
        <progress name="breakdown-progress-bar" className="breakdown-progress-bar" value={twoStarValue} max="100">pogChamp</progress>
        {` ${metaData.ratings["2"] || 0}`}
      </div>

      <div className="rating-breakdown-bar" onClick={() => { handleSortClick(filterOneStarReviews); }}>
        <label htmlFor="breakdown-progress-bar">1 stars</label>
        {' '}
        <progress name="breakdown-progress-bar" className="breakdown-progress-bar" value={oneStarValue} max="100">pogChamp</progress>
        {` ${metaData.ratings["1"] || 0}`}
      </div>
    {/* </div> */}
    </>
  );
};

export default RatingBreakdown;
