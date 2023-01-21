const express = require('express');

const innerviewController = require('../controllers/innerviewController');

const router = express.Router();

router.get('/', innerviewController.getPeople, (req, res) => {
  res.status(200).json(res.locals.results);
});

router.get('/posts', innerviewController.getPosts, (req, res) => {
  res.status(200).json(res.locals.results);
})

module.exports = router;