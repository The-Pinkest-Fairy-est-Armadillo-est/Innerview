const express = require('express');

const innerviewController = require('../controllers/innerviewController');

const router = express.Router();

router.get('/', innerviewController.getPeople, (req, res) => {
  console.log('at endpoint of GET apiRouter')
  console.log(res.locals.results)
  let returnThis = res.locals.results;
  res.status(200).json(returnThis);
});

module.exports = router;