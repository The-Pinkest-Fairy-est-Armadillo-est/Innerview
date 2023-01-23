const express = require('express');

const innerviewController = require('../controllers/innerviewController');

const router = express.Router();

router.get('/', innerviewController.getPeople, (req, res) => {
  return res.status(200).json(res.locals.results);
});

router.get('/posts', innerviewController.getPosts, (req, res) => {
  return res.status(200).json(res.locals.results);
});

router.post('/', innerviewController.postPosts, (req, res) => {
  return res.status(200).json(res.locals.results);
});

router.post('/signup', innerviewController.signUp, (req, res) => {
  return res.status(200).json(res.locals.user);
})

module.exports = router;