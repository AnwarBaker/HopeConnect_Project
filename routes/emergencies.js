const express = require('express');
const router = express.Router();
const controller = require('../controllers/emergenciesController');
const authMiddleware = require('../middleware/authMiddleware');
const authorizeRole = require('../middleware/authorizeRole');

router.get('/', authMiddleware, authorizeRole('admin', 'coordinator', 'volunteer', 'donor'), controller.getAll);
router.post('/', authMiddleware, authorizeRole('admin', 'coordinator'), controller.add);
router.put('/:id', authMiddleware, authorizeRole('admin', 'coordinator'), controller.update);
router.delete('/:id', authMiddleware, authorizeRole('admin'), controller.delete);

module.exports = router;
