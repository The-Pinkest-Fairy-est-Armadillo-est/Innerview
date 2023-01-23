const express = require('express');

const innerviewController = require('../controllers/innerviewController');

const router = express.Router();

router.get('/', innerviewController.getPeople, (req, res) => {
  console.log('at endpoint of GET apiRouter')
  res.status(200).json(res.locals.results);
});

router.get('/posts', innerviewController.getPosts, (req, res) => {
  res.status(200).json(res.locals.results);
});

router.post('/', innerviewController.postPosts, (req, res) => {
  res.status(200).send('posts inserted successfully');
});

router.post('/signup', innerviewController.signUp, (req, res) => {
  res.status(200).json(res.locals.user);
})

module.exports = router;