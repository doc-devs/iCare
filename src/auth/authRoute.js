'use strict';

const express = require('express');
const authRoute = express.Router();

const getHandler = require('./models/routeHandlers/handlers')
const basicAuth = require('./middleware/basic.js')
const bearerAuth = require('./middleware/bearer.js')
const permissions = require('./middleware/acl.js')

authRoute.get('/', getHandler.handleGetHome );

authRoute.post('/signup', getHandler.handlePostSignUp );

authRoute.post('/signin', basicAuth, getHandler.handlePostSignIn );

authRoute.get('/users', bearerAuth, permissions('delete'), getHandler.handleGetUsers);

authRoute.get('/secret', bearerAuth, getHandler.handleGetSecret );

module.exports = authRoute;
