const { Pool, Client }  = require('pg');
const connectionString = 'postgresql://pcottman@localhost:5432/postgres';
const pool = new Pool({
 connectionString,
})

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

module.exports = pool;