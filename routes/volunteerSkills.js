const express = require('express');
const router = express.Router();
const controller = require('../controllers/volunteerSkillsController');
const authMiddleware = require('../middleware/authMiddleware');
const authorizeRole = require('../middleware/authorizeRole');

router.get('/', authMiddleware, authorizeRole('admin', 'coordinator'), controller.getAllSkills);
router.post('/', authMiddleware, authorizeRole('admin', 'coordinator'), controller.addSkill);
router.put('/:id', authMiddleware, authorizeRole('admin', 'coordinator'), controller.updateSkill);
router.delete('/:id', authMiddleware, authorizeRole('admin'), controller.deleteSkill);

module.exports = router;
