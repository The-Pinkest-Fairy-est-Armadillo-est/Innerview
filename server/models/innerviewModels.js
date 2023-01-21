const { Pool } = require('pg');

const PG_URI = 'postgres://vjcqgvna:CNUx7Bxsr7vkbcqG5aoXh2BHnEc2XBWq@salt.db.elephantsql.com/vjcqgvna';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('Executed Query: ', text);
    return pool.query(text, params, callback);
  }
}