const db = require('../database.js');
const appController = {};

// Create a new application in the database
appController.createApp = (req, res, next) => {
  const company = req.body.company;
  const position = req.body.position;
  const contact = req.body.contact;
  const notes = req.body.notes;
  const status = req.body.status;
  const applied_at = req.body.applied_at;
  const queryString = `
      INSERT INTO Applications (company, position, contact, notes, status, applied_at)
      VALUES ($1, $2, $3, $4, $5, $6);
      `;

  db.query(queryString, [company, position, contact, notes, status, applied_at])
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next({
        log: `Error occurred with appController.createApp middleware: ${err}`,
        status: 500,
        message: { err: 'An error occurred while creating a new application.' },
      });
    });
};

// Retrieve all applications from the database
appController.getApps = (req, res, next) => {
  const queryString = `
        SELECT * FROM Applications;
        `;
  db.query(queryString)
    .then((data) => {
      res.locals.applications = data.rows;
      return next();
    })
    .catch((err) => {
      return next({
        log: `Error occurred with appController.getApps middleware: ${err}`,
        status: 500,
        message: { err: 'An error occurred when retrieving applications.' },
      });
    });
};

// Delete an application from the database based on ID
appController.deleteApp = (req, res, next) => {
  const id = req.params.id;
  const queryString = `
        DELETE FROM Applications WHERE id = $1;
        `;
  db.query(queryString, [id])
    .then(() => {
      return next();
    })
    .catch((err) => {
      return next({
        log: `Error occurred with appController.deleteApp middleware: ${err}`,
        status: 500,
        message: { err: 'An error occurred when deleting an application.' },
      });
    });
};

module.exports = appController;
