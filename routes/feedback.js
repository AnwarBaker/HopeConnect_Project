const express = require('express');
const router = express.Router();
const controller = require('../controllers/feedbackController');
const authMiddleware = require('../middleware/authMiddleware');
const authorizeRole = require('../middleware/authorizeRole');

router.get('/', authMiddleware, authorizeRole('admin', 'coordinator'), controller.getAllFeedback);
router.post('/', authMiddleware, authorizeRole('donor', 'volunteer'), controller.addFeedback);
router.delete('/:id', authMiddleware, authorizeRole('admin'), controller.deleteFeedback);

module.exports = router;
