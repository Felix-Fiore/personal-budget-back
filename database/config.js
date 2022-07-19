const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(toString(process.env.DB_DATABASE_URI), {
  dialect: 'postgres',
});

module.exports = { sequelize };
