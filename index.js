const express = require('express');
const dbConnection = require('./database/config');
const cors = require('cors');

require('dotenv').config();

// Create a new express application instance
const app = express();

// Database connection
dbConnection();

// CORS
app.use(cors());

// Parsing JSON
app.use(express.json());

// Routs
app.use('/api/users', require('./routes/users'));
app.use('/api/operations', require('./routes/operations'));

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
