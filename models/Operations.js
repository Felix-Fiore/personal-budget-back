const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');

const operations = sequelize.define('operations', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  concept: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },

  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

module.exports = { operations };
