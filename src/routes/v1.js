'use strict'

const express = require('express');
const dataModules = require('../models/index');
const get = require('./routeHandlers/handlers')

const bearerAuth = require('../auth/middleware/bearer')
const permissions = require('../auth/middleware/acl');

const router = express.Router()

router.param('model', (req,res,next) => {
    const modelName = req.params.model
  if (dataModules[modelName]) {
    req.model = dataModules[modelName];
    next();
  } else {
    next('Invalid Model');
  }
})

router.get('/', get.handleGetHome)
router.get('/:model', bearerAuth, get.handleGetAll);
router.get('/:model/:id',bearerAuth, get.handleGetOne);
router.post('/:model', bearerAuth, permissions('create'), get.handleCreate);
router.put('/:model/:id', bearerAuth, permissions('update'), get.handleUpdate);
router.delete('/:model/:id', bearerAuth, permissions('delete'),get.handleDelete);

module.exports = router
