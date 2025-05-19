
const emergencyModel = require('../models/emergencyModel');

exports.getAll = (req, res) => {
  emergencyModel.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.add = (req, res) => {
  const data = [req.body.title, req.body.description, req.body.start_date, req.body.end_date];

  emergencyModel.add(data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Emergency campaign created', id: result.insertId });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const data = [req.body.title, req.body.description, req.body.start_date, req.body.end_date];

  emergencyModel.update(data, id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Emergency campaign updated' });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  emergencyModel.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Emergency campaign deleted' });
  });
};
