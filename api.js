const config = require('./config.js');

const getProductData = (callback) => {
  const options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    },
  };
  callback(options);
};

module.exports.getProductData = getProductData;
