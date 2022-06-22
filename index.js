const express = require('express');
const cors = require('cors');
const { sequelize } = require('./database/config');
require('dotenv').config();

// Create a new express application instance
const app = express();

// Database connection
//sequelize;

// CORS
app.use(cors());

// Parsing JSON
app.use(express.json());

// Routs
app.use('/api/users', require('./routes/users'));
app.use('/api/operations', require('./routes/operations'));

// Start the server
const sequelizeStart = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

sequelizeStart();
