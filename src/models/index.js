'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const userModel = require('../auth/models/users');
const patientModel = require('./Patient/model')
const Collection = require('./data-collection.js');

const DATABASE_URL =
  process.env.NODE_ENV === 'test'
    ? 'sqlite:memory'
    : process.env.DATABASE_URL;

let sequelizeOptions = process.env.NODE_ENV === 'production'
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  }
  : { logging: false };

const sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);
const patient = patientModel(sequelize, DataTypes)
const users = userModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users,
  patient: new Collection(patient)
};
