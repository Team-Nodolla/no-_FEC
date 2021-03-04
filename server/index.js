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
  Authorization: config.TOKEN,
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
    .catch((err) => res.status(418).send(err));
});

// RATINGS AND REVIEW HANDLERS
app.get('/reviews/sort/:text/product/:product_id', (req, res) => {
  axios.get(`${url}/reviews?sort=${req.params.text}&product_id=${req.params.product_id}`, {
    headers: token,
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log('server error fetching product', err);
      res.status(500).end();
    });
});

app.get('/reviews/meta/:product_id', (req, res) => {
  axios.get(`${url}/reviews/meta?product_id=${req.params.product_id}`, {
    headers: token,
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log('server error fetching review meta data', err);
      res.status(500).end();
    });
});
// <------------------------->

/* *************************** */
/*  Related Products Carousel  */
/* *************************** */

// Returns the IDs of all products related to the product with id product_id
app.get('/products/:product_id/related', (req, res) => {
  const productID = req.params.product_id;
  axios.get(`${url}/products/${productID}/related`, {
    headers: token,
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.get('/products/:product_id', (req, res) => {
  const productID = req.params.product_id;
  axios.get(`${url}/products/${productID}`, {
    headers: token,
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/products/:product_id/styles', (req, res) => {
  const productID = req.params.product_id;
  axios.get(`${url}/products/${productID}/styles`, {
    headers: token,
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/products/:product_id/styles', (req, res) => {
  const productID = req.params.product_id;
  axios.get(`${url}/products/${productID}/styles`, {
    headers: token,
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server listening on http://localhost:${port}`);
});
