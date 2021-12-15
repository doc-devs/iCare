'use strict';

const bcrypt = require('bcrypt');

const userModel = (sequelize, DataTypes) => {
  
  const model = sequelize.define('Users', {
    username: { type: DataTypes.STRING, required: true, unique: true },
    jobDescription: { type: DataTypes.STRING, required: false, unique: false },
    password: { type: DataTypes.STRING, required: true },
    role: { type: DataTypes.ENUM('user', 'writer', 'editor', 'admin'), required: true, defaultValue: 'user'},
  });

  model.beforeCreate(async (user) => {
    let hashedPass = await bcrypt.hash(user.password, 10);
    user.password = hashedPass;
  });

  model.authenticateBasic = async function (username, password) {

    const user = await this.findOne({ where: { username } })
    const valid = await bcrypt.compare(password, user.password)

    if (valid) { return user }
    else throw new Error('Invalid User');
  };
  
  return model;
}

module.exports = userModel;
