const express = require('express');
const router = express.Router();
const controller = require('../controllers/matchingController');
const authMiddleware = require('../middleware/authMiddleware');
const authorizeRole = require('../middleware/authorizeRole');

// Allow only admin/coordinator to see matches
router.get(
  '/match-emergencies-volunteers',
  authMiddleware,
  authorizeRole('admin', 'coordinator'),
  controller.matchEmergenciesWithVolunteers
);

module.exports = router;
