'use strict'

const axios = require('axios')
const { nurseQuestions } = require('./nurseQuestions');
const welcome2 = require('./welcome2');

async function signIn(obj) {

  await axios({
    method: 'post',
    url: 'http://localhost:3000/signin',
    responseType: 'json',
    auth: {
      username: obj['username'],
      password: obj['password']
    },
  })
    .then(function (response) {

      if (response.data) {
        console.log(`\n Login is successful. You're signed in as: ${response.data.user.jobDescription}\n`)
        nurseQuestions()
      }
      else {
        console.log('Invalid login. Try again.')
        welcome2();
      }
    })
}
async function signUp(obj) {

  await axios({
    method: 'post',
    url: 'http://localhost:3000/signup',
    responseType: 'json',
    data: {
      username: obj['username'],
      password: obj['password'],
      jobDescription: obj['jobDescription'],
      role: obj['role']
    },
  })
    .then(function (response) {

      if (response.data) {
        console.log(`\n Login is successful. You're signed in as: ${response.data.user.jobDescription}\n`)
        nurseQuestions()
      }
      else return '\nError singing up\n'
    });

  //end
}

module.exports = { signIn, signUp }
