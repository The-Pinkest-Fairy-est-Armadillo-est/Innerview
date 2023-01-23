const db = require('../models/innerviewModels');

// const escape = require('pg-escape');

const innerviewController = {};

innerviewController.getPeople = (req, res, next) => {
  console.log('executing innerviewController.getPeople')
  // write code here
  const queryText = `
    SELECT * FROM people
  `;

  db.query(queryText)
    .then(results => {
      res.locals.results = results.rows;
      next();
    })
    .catch(err => next({
      log: `Error occurred when trying to get posts: ${err}`,
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
        next();
      })
      .catch(err => next({
        log: `Error occurred when trying to get posts: ${err}`,
        message: { err:  `Issue ocurred with innerviewController.getPosts`},
      }));
    };

  innerviewController.postPosts = (req, res, next) => {

    const { people_id, role, behavioral_questions, technical_challenges, sense_of_culture, interview_description, company_name, location, placeholder1, placeholder2, placeholder3, placeholder4 } = req.body;
    const params = [ people_id, role, behavioral_questions, technical_challenges, sense_of_culture, interview_description, company_name, location, placeholder1, placeholder2, placeholder3, placeholder4 ];

    const queryText = `
      INSERT INTO posts (people_id, role, behavioral_questions, technical_challenges, sense_of_culture, interview_description, company_name, location)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    `
    db.query(queryText, params)
      .then(results => {
        return next();
      })
      .catch(err => next({
        log: `Error occurred when trying to get posts: ${err}`,
        message: { err:  `Issue ocurred with innerviewController.postPosts`},
      }));
  },



  module.exports = innerviewController;