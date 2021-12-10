'use strict';

const { signIn } = require('./axiosCalls.js')

async function getUserCredentials() {
  let userData = {}

  rl.question('What is your username?\n', (answer) => {
    userData['username'] = answer;
    rl.question('What is your password?\n', async (answer) => {
      userData['password'] = answer;  
      signIn(userData)
    });
  });
}

module.exports = getUserCredentials;
