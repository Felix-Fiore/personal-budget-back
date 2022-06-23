const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');
const { operations } = require('./Operations');

const users = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

users.hasMany(operations, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

operations.belongsTo(users, {
  foreignKey: 'userId',
});

module.exports = users;
