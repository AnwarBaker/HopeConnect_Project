
const volunteerModel = require('../models/volunteerModel');

exports.getAllVolunteers = (req, res) => {
  volunteerModel.getAllVolunteers((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.addVolunteer = (req, res) => {
  const data = [req.body.full_name, req.body.email, req.body.phone, req.body.location, req.body.availability];

  volunteerModel.addVolunteer(data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Volunteer registered', id: result.insertId });
  });
};

exports.updateVolunteer = (req, res) => {
  const id = req.params.id;
  const data = [req.body.full_name, req.body.email, req.body.phone, req.body.location, req.body.availability];

  volunteerModel.updateVolunteer(data, id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Volunteer updated' });
  });
};

exports.deleteVolunteer = (req, res) => {
  const id = req.params.id;
  volunteerModel.deleteVolunteer(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Volunteer deleted' });
  });
};

exports.getVolunteersBySkill = (req, res) => {
  const skill = req.params.skill;
  
  volunteerModel.getVolunteersBySkill(skill, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
