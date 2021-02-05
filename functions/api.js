'use strict';
const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser);

app.get('/test', (req, res) => {
  res.send('test');
});

module.exports.handler = serverless(app);
