const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const axios = require('axios');
const config = require('../config.js');

const app = express();
const port = 3000;

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo';
const token = {
  'User-Agent': 'request',
  'Authorization': config.TOKEN
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.use(express.static('./client/dist'));

app.get('/products', (req, res) => {
  axios.get(`${url}/products`, {
    headers: token,
  })
    .then((data) => res.status(200).send(data.data))
    .catch((err) => res.send(err));
});

app.get('/products/:product_id', (req, res) => {
  console.log('params', req.params.id);
  axios.get(`${url}/products/:product_id`, {
    headers: token,
  })
    .then((data) => res.send(data.data))
    .catch((err) => res.send(err));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server listening on http://localhost:${port}`);
});
