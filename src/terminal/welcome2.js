'use strict';

// WELCOME VERSION 2 using readline-sync

const getUserCredentials = require('./getUserCredentials');
const createUserCredentials = require('./createUserCredentials');

const welcome2 = () => {

  new Promise((resolve) => {
    rl.question('\nHello! What would you like to do?\n\n[1] - sign in\n[2] - sign up\n', (answer) => {
      resolve(answer);
    })
  }).then((data) => {
    if (data === '1') {
      getUserCredentials();
    } else if (data === '2') {
      createUserCredentials();
    } else {
      console.log('\nInvalid input. Please choose a number and press ENTER.\n')
      welcome2()
    }
  }).catch((e) => {
    console.log(e)
  })

}

module.exports = welcome2;




