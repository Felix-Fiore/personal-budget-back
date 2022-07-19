require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./database/config');

require('./models/Users');
require('./models/Operations');

const PORT = process.env.PORT || 4001;
// Create a new express application instance
const app = express();

// Public folder
app.use(express.static('public'));

// Database connection
const sequelizeStart = async () => {
  try {
    await sequelize.sync({ alter: false });
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

sequelizeStart();

// CORS
//app.use(cors());

// Parsing JSON
app.use(express.json());

// Routs
app.use('/api/users', require('./routes/users'));
app.use('/api/operations', require('./routes/operations'));
