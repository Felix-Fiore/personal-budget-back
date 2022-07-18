const express = require('express');
const cors = require('cors');
const { sequelize } = require('./database/config');
const { Pool } = require('./pg');

require('dotenv').config();
require('./models/Users');
require('./models/Operations');
// Create a new express application instance
const app = express();

// Public folder
app.use(express.static('public'));

// Database connection
const sequelizeStart = async () => {
  try {
    await sequelize.sync({ alter: false });
    // Start the server
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

sequelizeStart();

// CORS
app.use(cors());

// Parsing JSON
app.use(express.json());

// Routs
app.use('/api/users', require('./routes/users'));
app.use('/api/operations', require('./routes/operations'));
