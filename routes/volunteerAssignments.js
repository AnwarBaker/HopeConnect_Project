const express = require('express');
const router = express.Router();
const controller = require('../controllers/volunteerAssignmentsController');
const authMiddleware = require('../middleware/authMiddleware');
const authorizeRole = require('../middleware/authorizeRole');

router.get('/', authMiddleware, authorizeRole('admin', 'coordinator', 'volunteer'), controller.getAllAssignments);
router.post('/', authMiddleware, authorizeRole('admin', 'coordinator'), controller.addAssignment);
router.put('/:id', authMiddleware, authorizeRole('volunteer'), controller.updateAssignment); // only volunteer can update
router.delete('/:id', authMiddleware, authorizeRole('admin'), controller.deleteAssignment);

module.exports = router;


