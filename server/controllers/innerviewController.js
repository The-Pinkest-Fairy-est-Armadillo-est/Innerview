const db = require('../models/innerviewModels');

const innerviewController = {};

innerviewController.getPeople = (req, res, next) => {
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
      log: `Error occurred when trying to retrieve list of Codesmith Alumns: ${err}`,
      message: { err:  'Issue ocurred with innerviewController.getPeople'},
    }));
  };

  innerviewController.getPosts = (req, res, next) => {
    const queryText = `
      SELECT * FROM posts
    `;

    db.query(queryText)
      .then(results => {
        res.locals.results = results.rows;
        next();
      })
      .catch(err => next({
        log: `Error occurred when trying to retrieve list of Posts: ${err}`,
        message: { err: 'Issue occurred with innerviewController.getPosts'},
      }));
  }

  module.exports = innerviewController;