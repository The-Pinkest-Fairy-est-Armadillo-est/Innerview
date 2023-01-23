const db = require('../models/innerviewModels');

const innerviewController = {};

innerviewController.getPeople = (req, res, next) => {
  console.log('executing innerviewController.getPeople')
  const queryText = `
    SELECT * FROM people
  `;

  db.query(queryText)
    .then(results => {
      res.locals.results = results.rows;
      return next();
    })
    .catch(err => next({
      log: `Error occurred when trying to get people: ${err}`,
      message: { err:  `Issue ocurred with innerviewController.getPeople`},
    }));
};

innerviewController.getPosts = (req, res, next) => {
  console.log('executing innerviewController.getPosts')
  // write code here
  const queryText = `
    SELECT * FROM posts
  `;

  db.query(queryText)
    .then(results => {
      res.locals.results = results.rows;
      return next();
    })
    .catch(err => next({
      log: `Error occurred when trying to get posts: ${err}`,
      message: { err:  `Issue ocurred with innerviewController.getPosts`},
    }));
  };

innerviewController.postPosts = (req, res, next) => {
  const { email, role, behavioral_questions, technical_challenges, sense_of_culture, interview_description, company_name, location } = req.body;

  const firstQuery = `
    SELECT _id
    FROM people
    WHERE email='${email}';
  `;

  let people_id;
  db.query(firstQuery)
    .then(result => people_id = result)
    .catch(err => next({
      log: `Error occurred when trying to retrieve person ID via email: ${err}`,
      message: { err:  `Issue ocurred when trying to post. Please try again later.`},
    }));

  const params = [ people_id, role, behavioral_questions, technical_challenges, sense_of_culture, interview_description, company_name, location ];
  if (params.includes('')) {
    res.locals.results = 'empty field'; //send this string to front end not all fields are filled
    return next();
  };

  const queryText = `
    INSERT INTO posts (people_id, role, behavioral_questions, technical_challenges, sense_of_culture, interview_description, company_name, location)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  `;
  
  db.query(queryText, params)
    .then(() => {
      res.locals.results = 'successfully posted';
      return next();
    })
    .catch(err => next({
      log: `Error occurred when trying to update database with new post: ${err}`,
      message: { err:  `Issue ocurred when trying to post. Please try again later.`},
    }));
};

innerviewController.signUp = async (req, res, next) => {
  const { name, password, email } = req.body;
  console.log('interviewController input:', name, password, email)
  const params = [ name, password, email ];

  if (params.includes('')) {
    res.locals.user = 'missingInfo';
    return next();
  }

  let existingUser = false;

  const emailQueryCheck = `
    SELECT name
    FROM people
    WHERE email='${email}'
  `;

  await db.query(emailQueryCheck)
    .then(results => {
      if (results.rows.length) existingUser = true;
    })
    .catch(err => next({
      log: `Error occurred when trying to query database for an existing user: ${err}`,
      message: { err:  `Issue ocurred when trying to sign up. Please try again later.`},
    }));

  if (existingUser) {
    res.locals.user = [];
    return next();
  }
  else {
    const addUserQuery = `
      INSERT INTO people (name, password, email)
      VALUES ($1, $2, $3)
    `;

    db.query(addUserQuery, params)
      .then(() => {
        res.locals.user = 'userAdded';
        return next();
      })
      .catch(err => next({
        log: `Error occurred when trying to update database with new user: ${err}`,
        message: { err:  `Issue ocurred when trying to sign up. Please try again later.`},
      }))
  };
}

module.exports = innerviewController;