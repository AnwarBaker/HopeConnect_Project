
const volunteerSkillModel = require('../models/volunteerSkillModel');

exports.getAllSkills = (req, res) => {
  volunteerSkillModel.getAllSkills((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.addSkill = (req, res) => {
  const data = [req.body.volunteer_id, req.body.skill_name];

  volunteerSkillModel.addSkill(data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Skill added', id: result.insertId });
  });
};

exports.updateSkill = (req, res) => {
  const id = req.params.id;
  const data = [req.body.volunteer_id, req.body.skill_name];

  volunteerSkillModel.updateSkill(data, id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Skill updated' });
  });
};

exports.deleteSkill = (req, res) => {
  const id = req.params.id;
  volunteerSkillModel.deleteSkill(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Skill deleted' });
  });
};
