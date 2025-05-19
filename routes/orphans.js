const express = require('express');
const router = express.Router();
const orphanController = require('../controllers/orphansController');
const authMiddleware = require('../middleware/authMiddleware');
const authorizeRole = require('../middleware/authorizeRole');

router.get('/', authMiddleware, authorizeRole('admin', 'coordinator'), orphanController.getAllOrphans);
router.post('/', authMiddleware, authorizeRole('admin', 'coordinator'), orphanController.addOrphan);
router.put('/:id', authMiddleware, authorizeRole('admin', 'coordinator'), orphanController.updateOrphan);
router.delete('/:id', authMiddleware, authorizeRole('admin'), orphanController.deleteOrphan);

router.get('/public', orphanController.getAllOrphansPublic);


module.exports = router;
