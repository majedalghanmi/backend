// const { Pool } = require('pg');
// require('dotenv').config();

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false // مطلوب للاتصال بسيرفرات Cloud مثل Neon
//   }
// });

// module.exports = pool;



const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// The Detection Logic
pool.connect((err, client, release) => {
  if (err) {
    return console.error('❌ Error acquiring client:', err.stack);
  }
  console.log('✅ Successfully connected to PostgreSQL (Neon.tech)');
  release(); // Always release the client back to the pool
});

module.exports = pool;