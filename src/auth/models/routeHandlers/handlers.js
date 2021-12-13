'use strict'

const { users } = require('../../../models/index');

const handleGetHome = async (req, res, next) => {
  let welcomeMessage = 'Hello, Welcome to Auth-API \n if you\'re a New Nurse or Doctor go to /signup \n if you\'ve already signed up sign in at /signin'
  res.status(200).send(welcomeMessage)
}

const handlePostSignUp = async (req, res, next) => {
  try {
    req.body.username.toLowerCase()
    // console.log('check username: ',req.body.username)
    let newUserRecord = await users.create(req.body);
    const output = {
      user: newUserRecord,
      token: newUserRecord.token
    };
    console.log('handlePostSignUp returned: ', output)
    res.status(201).json(output);
  } catch (e) {
    console.log('failed at handlePostSignup');
    res.status(409).send('Sorry, this username is taken. Please try again.');
    // next(e.message);
  }
}

const handlePostSignIn = (req, res, next) => {
  try {

    const user = {
      user: req.user,
      token: req.user.token
    };
    res.status(200).json(user);

  } catch (e) {
    console.error(e.message);
    res.status(409).send('Invalid login, please try again');
  }
}

const handleGetUsers = async (req, res, next) => {
  try {
    const userRecords = await users.findAll({});
    const list = userRecords.map(user => user.username);
    res.status(200).json(list);
  } catch (e) {
    console.error(e.message);
  }

}

const handleGetSecret = async (req, res, next) => {
  try {
    res.status(200).send('Welcome to the secret area');
  } catch (e) {
    console.error(e.message);
  }
}

module.exports = {
  handleGetHome,
  handlePostSignUp,
  handlePostSignIn,
  handleGetUsers,
  handleGetSecret
}
