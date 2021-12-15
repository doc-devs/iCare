'use strict'

function handle500(req, res, next) {
  res.status(500).send({
    error: 500,
    message: `SERVER ERROR: ${error.message}`
  })
}

module.exports = handle500;
