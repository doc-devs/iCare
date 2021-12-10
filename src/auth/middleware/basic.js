'use strict';

const base64 = require('base-64');
const { users } = require('../../models/index');
const welcome2 = require('../../terminal/welcome2');

module.exports = async (req, res, next) => {

  if (!req.headers.authorization) { return 'authorization headers empty' }

  let basic = req.headers.authorization.split(' ').pop();
  let [username, password] = base64.decode(basic).split(':');

  try {
    req.user = await users.authenticateBasic(username, password)
    next();
  } catch (e) {
    console.log('\nInvalid login. Try again! (from basic.js catch block)');
    welcome2();
  }

}
