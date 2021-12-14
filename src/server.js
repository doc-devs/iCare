'use strict';

const express = require('express');
const cors = require('cors');
const notFoundHandler = require('./error-handlers/404.js');
const userRoutes = require('./auth/authRoute');
const app = express();

app.use(cors());
app.use(express.json());

app.use(userRoutes);

app.use('*', notFoundHandler);

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, async () => {
      console.log(`Listening on ${port}`)
    }
    );
  },
};
