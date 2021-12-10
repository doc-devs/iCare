'use strict';

const patientModel = (sequelize, DataTypes) => sequelize.define('Patient', {
  name: { type: DataTypes.STRING, required: true },
  priority: { type: DataTypes.STRING, required: true },
});

module.exports = patientModel;
