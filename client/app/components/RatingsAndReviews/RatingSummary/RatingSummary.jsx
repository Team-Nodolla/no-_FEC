import React, { useEffect, useState } from 'react';
import propTypes from 'proptypes';
import StarRating from '../../StarRating/StarRating.jsx';
import getAverageScore from '../../helperFunctions/getAverageScore.jsx';
import './RatingSummary.css';

const RatingSummary = ({ metaData }) => {
  const [averageScore, setAverageScore] = useState(0);
  const [percentRecommend, setPercentRecommend] = useState(0);

  useEffect(() => {
    if (metaData.ratings) {
      let didRecommend = 0;
      let didNotRecommend = 0;
      const recommendedArray = Object.entries(metaData.recommended);

      const totalScore = getAverageScore(metaData.ratings);
      setAverageScore(totalScore);

      // find average recommended
      for (let j = 0; j < recommendedArray.length; j += 1) {
        // if the reviewer recommends this product
        if (recommendedArray[j][0] === 'true') {
          // incremement didRecommend
          didRecommend += recommendedArray[j][1] * 1;
        } // else
        if (recommendedArray[j][0] === 'false') {
          // incremement didNotRecommend
          didNotRecommend += recommendedArray[j][1] * 1;
        }
      }
      // get average recommendations and turn into percentage
      // add did and didNot recommend together, divide did by total * 100
      const percentageOfRecommendations = (didRecommend / (didRecommend + didNotRecommend)) * 100;
      setPercentRecommend(percentageOfRecommendations);
    }
  }, [metaData]);

  // add star component and pass it average rating

  // pass ratings to rating breakdown component
  // pass characteristcs to product breakdown component
  return (
    <>
      <div className="ratingSummary">
        {averageScore}
        <StarRating reviewScore={averageScore || null} className="starRating" />
      </div>
      <div className="percentRecommend">
        {percentRecommend}
        % recommend this product
      </div>
      <div className="ratingBreakdown">rating breakdown component here</div>
      <div className="productBreakdown">product breakdown component here</div>
    </>
  );
};

RatingSummary.propTypes = {
  metaData: propTypes.object.isRequired
};

export default RatingSummary;
