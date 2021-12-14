'use strict';

const express = require('express');
const authRoute = express.Router();

const getHandler = require('./models/routeHandlers/handlers')
const basicAuth = require('./middleware/basic.js')

authRoute.get('/userPortal', getHandler.handleGetHome );

authRoute.post('/signup', getHandler.handlePostSignUp );

authRoute.post('/signin', basicAuth, getHandler.handlePostSignIn );

module.exports = authRoute;
