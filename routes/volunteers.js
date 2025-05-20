const express = require('express');
const router = express.Router();
const controller = require('../controllers/volunteersController');
const authMiddleware = require('../middleware/authMiddleware');
const authorizeRole = require('../middleware/authorizeRole');

router.get('/', authMiddleware, authorizeRole('admin', 'coordinator'), controller.getAllVolunteers);
router.post('/', authMiddleware, authorizeRole('admin', 'coordinator'), controller.addVolunteer);
router.put('/:id', authMiddleware, authorizeRole('admin', 'coordinator'), controller.updateVolunteer);
router.delete('/:id', authMiddleware, authorizeRole('admin'), controller.deleteVolunteer);
//
router.get('/skill/:skill',authMiddleware,authorizeRole('admin', 'coordinator'),controller.getVolunteersBySkill);
//
module.exports = router;
