// Requiring-in our 'innerviewModels' to a const so that we can use the query method
// to query the DB 
const db = require('../models/innerviewModels');

// Creating an empty object to hold all our Middleware functions as methods
const innerviewController = {};

// 'getPeople' will return everything from the 'people' table
innerviewController.getPeople = (req, res, next) => {
  const queryText = `
    SELECT * FROM people
  `;

  db.query(queryText)
    .then(results => {
      res.locals.results = results.rows; // information coming back from the DB will be found on its 'row' property
      return next();
    })
    .catch(err => next({
      log: `Error occurred when trying to get people: ${err}`,
      message: { err:  `Issue ocurred with innerviewController.getPeople`},
    }));
};

// 'getPosts' will retrieve all the posts from the DB
innerviewController.getPosts = (req, res, next) => {
  // We're interested in the name column from the 'people' table
  // and almost all the columns from the 'posts' table
  // and we want to perform a LEFT JOIN to include everything from the 'posts' table selected
  // where the '_id' primary key in the 'people' table matches the 'people_id' foreign key in the 'posts' table
  const queryText = `
    SELECT people.name, posts.role, posts.behavioral_questions, posts.technical_challenges, posts.sense_of_culture, posts.interview_description, posts.company_name, posts.location
    FROM posts
    LEFT JOIN people
    ON people._id = posts.people_id;
  `;

  db.query(queryText)
    .then(results => {
      res.locals.results = results.rows; // information coming back from the DB will be found on its 'row' property
      return next();
    })
    .catch(err => next({
      log: `Error occurred when trying to get posts: ${err}`,
      message: { err:  `Issue ocurred with innerviewController.getPosts`},
    }));
  };

// 'postPosts' will add a post entry to the 'posts' table in the DB
innerviewController.postPosts = (req, res, next) => {
  // deconstructing the information coming in from the req.body (Post Interview form submission)
  const { 
    email, 
    role, 
    behavioral_questions, 
    technical_challenges, 
    sense_of_culture, 
    interview_description, 
    company_name, 
    location 
  } = req.body;

  // Creating our first query here, the purpose is to find the person's ID on the 'people' table

  // since we are only provided the 'email' value of the person making the post in the req.body
  // we will need to find the person's id so that we can update the 'people' table entry accordingly
  const firstQuery = `
    SELECT _id
    FROM people
    WHERE email='${email}';
  `;

  // creating a varible 'people_id' to hold our found person ID
  let people_id;
  // Query the DB to find the person's '_id', and save it into the 'people_id' variable
  db.query(firstQuery)
    .then(result => people_id = result)
    .catch(err => next({
      log: `Error occurred when trying to retrieve person ID via email: ${err}`,
      message: { err:  `Issue ocurred when trying to post. Please try again later.`},
    }));

  // Now we can set up our 'params' array (paramaterizing our queries), including the 'people_id' variable to
  // Fill in that column on the 'posts' table
  const params = [ people_id, role, behavioral_questions, technical_challenges, sense_of_culture, interview_description, company_name, location ];
  
  // Some error handling here, we're checking if all fields have been filled in
  // if not, the 'params' array will have an empty string as one of its elements
  if (params.includes('')) {
    // we will send this string to front end as a flag that not all fields are filled
    res.locals.results = 'empty field';
    // and end this request response cycle
    return next();
  };

  // If we got here, this means all fields were filled out
  // and we can create a query to update our 'posts' table
  const queryText = `
    INSERT INTO posts (people_id, role, behavioral_questions, technical_challenges, sense_of_culture, interview_description, company_name, location)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  `;
  
  // Query the DB to insert this new post to the 'posts' table
  db.query(queryText, params)
    .then(() => {
      // we will send this string to front end as a flag that the form was successfully posted
      res.locals.results = 'successfully posted';
      // and end the request response cycle
      return next();
    })
    .catch(err => next({
      log: `Error occurred when trying to update database with new post: ${err}`,
      message: { err:  `Issue ocurred when trying to post. Please try again later.`},
    }));
};

// 'signUp' will add a user to the DB
// this function is async as it depends on a fetch request to resolve before moving on
// with the JS thread of execution of the remainder of the code
innerviewController.signUp = async (req, res, next) => {
  // Deconstruct the req.body properties here
  const { name, password, email } = req.body;

  // And set up our 'params' array for our query
  const params = [ name, password, email ];

  // But first, some error handling to see if a field was not filled out
  if (params.includes('')) {
    // we will send this string to front end as a flag that the form was not all filled out
    res.locals.user = 'missingInfo';
    // and end the request response cycle
    return next();
  }

  // We'll now have to check if the user is already existing
  // create a variable 'existingUser' to act as a flag, and set it as false
  let existingUser = false;

  // Create a query to check our 'people' table in the DB
  // to see if the email exists
  const emailQueryCheck = `
    SELECT name
    FROM people
    WHERE email='${email}'
  `;

  await db.query(emailQueryCheck)
    // if the email exists, it will be included in the 'rows' property of the result
    .then(results => {
      // which in this case, the 'rows' value, which is an array, will have length
      // and we will set the 'existingUser' flag to true
      if (results.rows.length) existingUser = true;
    })
    .catch(err => next({
      log: `Error occurred when trying to query database for an existing user: ${err}`,
      message: { err:  `Issue ocurred when trying to sign up. Please try again later.`},
    }));

  // If the user exists, then 
  if (existingUser) {
    // we will send this string to front end as a flag that the user already exists
    res.locals.user = 'userexists';
    // and end the request response cycle
    return next();
  }
  else {
    // otherwise, the user does not exist, and we can make a query to add them
    // to the DB
    const addUserQuery = `
      INSERT INTO people (name, password, email)
      VALUES ($1, $2, $3)
    `;

    db.query(addUserQuery, params)
      .then(() => {
        // we will send this string to front end as a flag that the user has been created
        res.locals.user = 'userAdded';
        // and end the request response cycle
        return next();
      })
      .catch(err => next({
        log: `Error occurred when trying to update database with new user: ${err}`,
        message: { err:  `Issue ocurred when trying to sign up. Please try again later.`},
      }))
  };
}

module.exports = innerviewController;