const express = require('express');
// Requiring-in the 'innerviewController' object so that we have access to our
// Middleware functions to handle any logic within our routes
const innerviewController = require('../controllers/innerviewController');
// 
const router = express.Router();

// Handling the GET route for the 'sign-in' button on the login form
// for front-end validation
router.get('/', innerviewController.getPeople, (req, res) => {
  return res.status(200).json(res.locals.results);
});

// Handling the GET route for after logging in, retrieving all posts from the DB
// to display on the interface page
router.get('/posts', innerviewController.getPosts, (req, res) => {
  return res.status(200).json(res.locals.results);
});

// Handling the POST route for the 'submit' button on the post interview form
router.post('/', innerviewController.postPosts, (req, res) => {
  return res.status(200).json(res.locals.results);
});

// Handling the POST route for the 'sign-up' button on the login form
router.post('/signup', innerviewController.signUp, (req, res) => {
  return res.status(200).json(res.locals.user);
})

// Exporting the 'router' object so that it can be used in 'server.js'
module.exports = router;