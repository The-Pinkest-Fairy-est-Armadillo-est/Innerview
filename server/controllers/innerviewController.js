const db = require('../models/innerviewModels');

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
      console.log('within db.query')
      console.log(res.locals.results)
      next();
    })
    .catch(err => next({
      log: `Error occurred when trying to getCharacters: ${err}`,
      message: { err:  'Issue ocurred with starWarsController.getCharacters'},
    }));
  };

  module.exports = innerviewController;