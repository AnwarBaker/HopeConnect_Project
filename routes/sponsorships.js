const express = require('express');
const router = express.Router();
const controller = require('../controllers/sponsorshipsController');
const authMiddleware = require('../middleware/authMiddleware');
const authorizeRole = require('../middleware/authorizeRole');

router.get('/', authMiddleware, authorizeRole('admin', 'coordinator'), controller.getAllSponsorships);
router.post('/', authMiddleware, authorizeRole('admin', 'coordinator'), controller.addSponsorship);
router.put('/:id', authMiddleware, authorizeRole('admin', 'coordinator'), controller.updateSponsorship);
router.delete('/:id', authMiddleware, authorizeRole('admin'), controller.deleteSponsorship);

module.exports = router;
