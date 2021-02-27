const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const axios = require('axios');
const config = require('../config.js');

const app = express();
const port = 3000;

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.use(express.static('./client/dist'));

app.get('/products', (req, res) => {
  axios.get(`${url}/products`, {
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    },
  })
    .then((data) => res.send(data.data))
    .catch((err) => console.error(err));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server listening on http://localhost:${port}`);
});
