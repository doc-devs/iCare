'use strict'

const { users } = require('../index');

const handleGetHome = async (req, res, next) => {
  let welcomeMessage = 'Hello, Welcome to Auth-API \n if you\'re a New Nurse or Doctor go to /signup \n if you\'ve already signed up sign in at /signin'
  res.status(200).send(welcomeMessage)
}

const handlePostSignUp = async (req, res, next) => {
  try {
    req.body.username.toLowerCase()
    let newUserRecord = await users.create(req.body);
    const newUser = {
      user: newUserRecord,
      token: newUserRecord.token
    };
    res.status(201).json(newUser);
  } catch (e) {
    res.status(409).send('Sorry, this username is taken. Please try again.');
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
    res.status(409).send('Invalid login, please try again');
  }
}

module.exports = {
  handleGetHome,
  handlePostSignUp,
  handlePostSignIn,
}
