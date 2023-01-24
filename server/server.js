// So we can use 'path' methods with __dirname to ensure file path integrity
const path = require('path');
const express = require('express');
// Requiring-in our /api routers
const apiRouter = require('./routes/api');
// Requiring-in 'cors' to avoid CORS errors
const cors = require('cors')
// Saving the Port Number into a const
const PORT = 3000;

// Instantiate our server
const app = express();

// Allow Cross-Origin Resource-Sharing to avoid CORS error
app.use(cors());

// Parsing request body, and any params in the url
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handling request for static files in our 'client' folder
app.use(express.static(path.resolve(__dirname, '../build')));

// Defining Route Handlers in our 'apiRouter' import
app.use('/api', apiRouter);

// Defining catch-all route handler for any requests to unknown routes
app.use('*', (req, res) => res.status(404).send('Page not found.'));

// Defining Global Error Handler for Middleware Functions
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express global error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  }
  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

// Start server and tell it to listen to the PORT assignment for any incoming requests
app.listen(PORT, () => { console.log(`Server listening on Port: ${PORT}`) });

module.exports = app;
