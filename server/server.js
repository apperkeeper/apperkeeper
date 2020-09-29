const path = require('path');
const express = require('express');

// Create instance of Express server
const app = express();
const PORT = process.env.PORT || 3000;

// Parse incoming requests
app.use(express.json());

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
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log('Node.js/Express server listening on port ', PORT);
});

module.exports = app;