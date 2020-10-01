const express = require('express');
const appController = require('./controllers/appController');

const router = express.Router();

router.get('/', appController.getApps, (req, res) => {
  return res.status(200).json({ applications: res.locals.applications });
});

router.post('/', appController.createApp, (req, res) => {
  return res.status(200).json({ applications: res.locals.applications });
});

router.delete('/:id', appController.deleteApp, (req, res) => {
  return res.status(200).json({ applications: res.locals.applications });
});

module.exports = router;
