'use strict';

let decode = require('base-64').decode
const { users } = require('../models/index')

module.exports = async (req, res, next) => {

  if (!req.headers.authorization) { return 'authorization headers empty' }

  let basic = req.headers.authorization.split(' ').pop();
  let [username, password] = decode(basic).split(':');

  try {
    req.user = await users.authenticateBasic(username, password)
    next();
  } catch (e) {
    console.log('\nInvalid login. Try again!');
    res.status(409).send('Invalid login, please try again');
  }

}
