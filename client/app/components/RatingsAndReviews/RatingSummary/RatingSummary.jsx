import React, { useEffect, useState } from 'react';
import propTypes from 'proptypes';
import StarRating from '../../StarRating/StarRating.jsx';
import getAverageRating from '../../helperFunctions/getAverageRating.jsx';
import './RatingSummary.css';

const RatingSummary = ({ metaData }) => {
  const [averageScore, setAverageScore] = useState(0);
  const [percentRecommend, setPercentRecommend] = useState(0);

  useEffect(() => {
    if (metaData.ratings) {
      let didRecommend = 0;
      let didNotRecommend = 0;
      const recommendedArray = Object.entries(metaData.recommended);

      const totalScore = getAverageRating(metaData.ratings);
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
      percentageOfRecommendations = Math.round(percentageOfRecommendations * 10) / 10;
      setPercentRecommend(percentageOfRecommendations);
    }
  }, [metaData]);

  // conditionally render percent who recommend product if there are 1 or more recommendations
  const NaNCondition = () => {
    if (isNaN(percentRecommend)) {
      return (
        <>
        </>
      );
    }
    return (
      <div className="percentRecommend">
        {percentRecommend}
        % recommend this product
      </div>
    );
  };

  // pass ratings to rating breakdown component
  // pass characteristcs to product breakdown component
  return (
    <>
      <div className="ratingSummary">
        <div className="averageScore">
          {averageScore}
        </div>
        <div className="summaryStarRating">
          <StarRating reviewScore={averageScore || null} setMargin="0 0 0 0" />
        </div>
      </div>
      <NaNCondition />
      <div className="ratingBreakdown">rating breakdown component here</div>
      <div className="productBreakdown">product breakdown component here</div>
    </>
  );
};

RatingSummary.propTypes = {
  metaData: propTypes.object
};

export default RatingSummary;
