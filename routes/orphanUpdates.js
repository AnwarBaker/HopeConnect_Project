const express = require('express');
const router = express.Router();
const controller = require('../controllers/orphanUpdatesController');
const authMiddleware = require('../middleware/authMiddleware');
const authorizeRole = require('../middleware/authorizeRole');

router.get('/', authMiddleware, authorizeRole('admin', 'coordinator', 'donor'), controller.getAllUpdates);
router.post('/', authMiddleware, authorizeRole('admin', 'coordinator'), controller.addUpdate);
router.put('/:id', authMiddleware, authorizeRole('admin', 'coordinator'), controller.updateUpdate);
router.delete('/:id', authMiddleware, authorizeRole('admin'), controller.deleteUpdate);

module.exports = router;
