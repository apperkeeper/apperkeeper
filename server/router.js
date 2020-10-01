import express from 'express';
import appController from './controllers/appController';

const router = express.Router();

router.get('/apps', appController.getApps, (req, res) => {
  return res.status(200).json({ applications: res.locals.applications });
});

router.post('/apps', appController.createApp, (req, res) => {
  return res.status(200).json({ applications: res.locals.applications });
});

router.delete('/apps:id', appController.deleteApp, (req, res) => {
  return res.status(200).json({ applications: res.locals.applications });
});

module.exports = router;
