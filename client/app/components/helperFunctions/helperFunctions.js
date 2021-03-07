// takes a characteristic name
// returns object with descriptions based on the values selected for that characteristic
const getCharacteristicDescriptions = (name) => {
  const reviewCharacteristicsObject = {};

  if (name === 'Size') {
    reviewCharacteristicsObject.one = 'A size too small';
    reviewCharacteristicsObject.two = '½ a size too small';
    reviewCharacteristicsObject.three = 'Perfect';
    reviewCharacteristicsObject.four = '½ a size too big';
    reviewCharacteristicsObject.five = 'A size too wide';
  }
  if (name === 'Width') {
    reviewCharacteristicsObject.one = 'Too narrow';
    reviewCharacteristicsObject.two = 'Slightly narrow';
    reviewCharacteristicsObject.three = 'Perfect';
    reviewCharacteristicsObject.four = 'Slightly wide';
    reviewCharacteristicsObject.five = 'Too wide';
  }
  if (name === 'Comfort') {
    reviewCharacteristicsObject.one = 'Uncomfortable';
    reviewCharacteristicsObject.two = 'Slightly uncomfortable';
    reviewCharacteristicsObject.three = 'Ok';
    reviewCharacteristicsObject.four = 'Comfortable';
    reviewCharacteristicsObject.five = 'Perfect';
  }
  if (name === 'Quality') {
    reviewCharacteristicsObject.one = 'Poor';
    reviewCharacteristicsObject.two = 'Below average';
    reviewCharacteristicsObject.three = 'What I expected';
    reviewCharacteristicsObject.four = 'Pretty great';
    reviewCharacteristicsObject.five = 'Perfect';
  }
  if (name === 'Length') {
    reviewCharacteristicsObject.one = 'Runs short';
    reviewCharacteristicsObject.two = 'Runs slightly short';
    reviewCharacteristicsObject.three = 'Perfect';
    reviewCharacteristicsObject.four = 'Runs slightly long';
    reviewCharacteristicsObject.five = 'Runs long';
  }
  if (name === 'Fit') {
    reviewCharacteristicsObject.one = 'Runs tight';
    reviewCharacteristicsObject.two = 'Runs slightly tight';
    reviewCharacteristicsObject.three = 'Perfect';
    reviewCharacteristicsObject.four = 'Runs slightly long';
    reviewCharacteristicsObject.five = 'Runs long';
  }

  return reviewCharacteristicsObject;
};

// takes a ratings object (i.e. metaData.ratings)
const getAverageRating = (ratings) => {
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

const getDefaultStyle = (styles) => {
  for (let i = 0; i < styles.length; i += 1) {
    if (styles[i]['default?'] === true) {
      return styles[i];
    }
  }
  return styles[0];
};

export {
  getCharacteristicDescriptions,
  getAverageRating,
  getDefaultStyle,
};
