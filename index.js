'use strict'
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
global.rl = readline.createInterface({ input, output });


require('dotenv').config();
const app = require('./src/server.js');

const { db } = require('./src/models');

db.sync().then(() => {
  app.start(process.env.PORT || 3001);
})
