// require library dependancies
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

// load environment variables
require('dotenv').config();

// require other modules
const authController = require('./controllers/authController');
const appRouter = require('./router');

// create instance of Express server
const app = express();
const PORT = process.env.PORT || 3000;

// parse incoming requests
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

// handle database requests
app.use('/app', appRouter);

// handle redirect from LinkedIn OAuth server
app.use('/auth', authController.getToken, (req, res) => {
  return res
    .status(200)
    .redirect('http://localhost:8080');
});

// serve static files when in production mode
if (process.env.NODE_ENV === 'production') {
  app.use('/public', express.static(path.resolve(__dirname, '../public')));
  app.get('/', (req, res) => {
    return res
      .status(200)
      .sendFile(path.resolve(__dirname, '../index.html'));
  });
}

// catch-all endpoint handler
app.use((req, res) => {
  return res.status(400).send('Page not found.');
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error!',
    status: 500,
    message: { err: 'An error occurred!' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(err);
  return res.status(errorObj.status).json(errorObj.message);
});

// open server on port, defined above
app.listen(PORT, () => {
  console.log('Node.js/Express server listening on port ', PORT);
});

module.exports = app;