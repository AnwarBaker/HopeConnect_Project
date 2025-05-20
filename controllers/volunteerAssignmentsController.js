
const volunteerAssignmentModel = require('../models/volunteerAssignmentModel');

exports.getAllAssignments = (req, res) => {
  volunteerAssignmentModel.getAllAssignments((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.addAssignment = (req, res) => {
  const data = [req.body.volunteer_id, req.body.task_description, req.body.assigned_date, req.body.status];

  volunteerAssignmentModel.addAssignment(data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Assignment added', id: result.insertId });
  });
};

exports.updateAssignment = (req, res) => {
  const id = req.params.id;
  const data = [req.body.volunteer_id, req.body.task_description, req.body.assigned_date, req.body.status];

  volunteerAssignmentModel.updateAssignment(data, id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Assignment updated' });
  });
};

exports.deleteAssignment = (req, res) => {
  const id = req.params.id;
  volunteerAssignmentModel.deleteAssignment(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Assignment deleted' });
  });
};
