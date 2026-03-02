const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // مطلوب للاتصال بسيرفرات Cloud مثل Neon
  }
});

module.exports = pool;