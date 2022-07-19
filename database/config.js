const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_DATABASE_URI, {
  dialect: 'postgres',
});

module.exports = { sequelize };
