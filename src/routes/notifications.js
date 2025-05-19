const express = require('express');
const router = express.Router();
const controller = require('../controllers/notificationsController');
const authMiddleware = require('../middleware/authMiddleware');
const authorizeRole = require('../middleware/authorizeRole');

router.get('/', authMiddleware, authorizeRole('admin', 'coordinator', 'volunteer'), controller.getAllNotifications);
router.post('/', authMiddleware, authorizeRole('admin', 'coordinator'), controller.addNotification);
router.delete('/:id', authMiddleware, authorizeRole('admin'), controller.deleteNotification);

module.exports = router;
