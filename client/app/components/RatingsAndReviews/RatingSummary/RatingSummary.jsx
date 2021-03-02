import React, { useEffect, useState } from 'react';
import propTypes from 'proptypes';

const RatingSummary = ({ metaData }) => {
  const [averageScore, setAverageScore] = useState(0);
  const [percentRecommend, setPercentRecommend] = useState(0);

  useEffect(() => {
    let totalScore = 0;
    let didRecommend = 0;
    let didNotRecommend = 0;
    if (metaData.ratings) {
      const ratingsArray = Object.entries(metaData.ratings);
      const recommendedArray = Object.entries(metaData.recommended);
      // find average rating
      for (let i = 0; i < ratingsArray.length; i += 1) {
        // add up the total score
        totalScore += ratingsArray[i][0] * ratingsArray[i][1];
      }
      // divide the total score by the number of ratings
      totalScore /= ratingsArray.length;
      // round to nearest 10th
      totalScore = Math.round(totalScore * 10) / 10;
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
      let percentageOfRecommendations = (didRecommend / (didRecommend + didNotRecommend)) * 100;
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
        <div className="starRating">stars here</div>
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
