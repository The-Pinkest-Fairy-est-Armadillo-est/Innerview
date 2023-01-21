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
      log: `Error occurred when trying to getCharacters: ${err}`,
      message: { err:  'Issue ocurred with starWarsController.getCharacters'},
    }));
  };

  module.exports = innerviewController;