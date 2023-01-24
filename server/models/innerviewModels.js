const { Pool } = require('pg');
const PG_URI = 'postgres://vjcqgvna:CNUx7Bxsr7vkbcqG5aoXh2BHnEc2XBWq@salt.db.elephantsql.com/vjcqgvna';

// Postgres Database is hosted in ElephantSQL
// There exists 2 tables, a 'posts' table and a 'people' table

// The 'people' table schema on creation was:
// CREATE TABLE people (
//   id int PRIMARY KEY,
//   name VARCHAR(15),
//   password TEXT,
//   email VARCHAR(30)
//   );

// And the 'posts' table schema on creation was:
// CREATE TABLE posts ( 
//   _id SERIAL PRIMARY KEY, 
//   people_id INT, 
//   role TEXT, 
//   behavioral_questions TEXT, 
//   technical_challenges TEXT, 
//   sense_of_culture TEXT, 
//   interview_description TEXT,
//   company_name TEXT,
//   location TEXT,
//   placeHolder1 TEXT NULL, 
//   placeHolder2 TEXT NULL, 
//   placeHolder3 TEXT NULL, 
//   placeHolder4 TEXT NULL, 
//   CONSTRAINT fk_people 
//      FOREIGN KEY(people_id) 
//         REFERENCES people(_id)
//   );

// The placeholders in the 'posts' table are for if we wanted to add a place to store additional
// questions on the form if there were to be more questions added

// You can recreate this table on your own instance on ElephantSQL however you'd like to meet your
// iteration needs. Hit up Maggie or Stephen for anything else
const pool = new Pool({
  connectionString: PG_URI
});

// Exporting an object here with a query method that can query the ElephantSQL DB
// Can be required-in to other modules if there is a need to query the DB
module.exports = {
  query: (text, params, callback) => {
    // Console-logging here during dev to confirm any DB queries happening
    // console.log('Executed Query: ', text);
    return pool.query(text, params, callback);
  }
}