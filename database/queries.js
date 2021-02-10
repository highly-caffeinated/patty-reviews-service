require('dotenv').config();
const { Pool, Client }  = require('pg');
const connectionString = `postgresql://student:${process.env.STUDENT_PASSWORD}@ec2-44-192-132-165.compute-1.amazonaws.com:5432/postgres`;
const pool = new Pool({
 connectionString,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

module.exports = pool;