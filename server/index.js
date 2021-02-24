const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.use(express.static('./client/dist'));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server listening on http://localhost:${port}`);
});
