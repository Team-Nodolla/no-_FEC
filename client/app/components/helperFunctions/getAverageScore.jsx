import React from 'react';

// takes a ratings object (i.e. metaData.ratings)
const getAverageScore = (ratings) => {
  // gathers totalScore
  let totalScore = 0;
  let numberOfRatings = 0;
  // create tupple for each rating 1-5
  const ratingsArray = Object.entries(ratings);
  // if there are no ratings, return null
  if (ratingsArray.length === 0) {
    return null;
  }
  // for each rating, add it to totalScore
  for (let i = 0; i < ratingsArray.length; i += 1) {
    totalScore += ratingsArray[i][0] * ratingsArray[i][1];
    numberOfRatings += ratingsArray[i][1] * 1;
  }
  // get average score of all ratings
  totalScore /= numberOfRatings;
  // round average score to nearest 10th
  totalScore = Math.round(totalScore * 10) / 10;
  // return average score
  return totalScore;
};

export default getAverageScore;
