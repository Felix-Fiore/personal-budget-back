const { Pool } = require('pg');

new Pool({
  connectionString: process.env.DB_CONNECTION,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  Pool,
};
