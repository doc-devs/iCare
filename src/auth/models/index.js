'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const userModel = require('../../auth/models/users');

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
const users = userModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users,
};
