const express = require('express');
const router = express.Router();
const controller = require('../controllers/donorsController');
const authMiddleware = require('../middleware/authMiddleware');
const authorizeRole = require('../middleware/authorizeRole');

router.get('/', authMiddleware, authorizeRole('admin', 'coordinator'), controller.getAllDonors);
router.post('/', authMiddleware, authorizeRole('donor'), controller.addDonor);

module.exports = router;
