const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'postgres://yfbtenrkhideei:133634341fcc7ef5b0907acb9aa6db537ad79b9cd5855d82aa6f4d33d45fff5a@ec2-34-235-198-25.compute-1.amazonaws.com:5432/da9f2fim3gvg8b',
  {
    dialect: 'postgres',
  }
);

module.exports = { sequelize };
