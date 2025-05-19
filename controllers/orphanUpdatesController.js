
const orphanUpdatesModel = require('../models/orphanUpdatesModel');

exports.getAllUpdates = (req, res) => {
  orphanUpdatesModel.getAllUpdates((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.addUpdate = (req, res) => {
  const data = [req.body.orphan_id, req.body.update_text, req.body.photo_url];

  orphanUpdatesModel.addUpdate(data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Update added', id: result.insertId });
  });
};

exports.updateUpdate = (req, res) => {
  const id = req.params.id;
  const data = [req.body.orphan_id, req.body.update_text, req.body.photo_url];

  orphanUpdatesModel.updateUpdate(data, id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Update modified successfully' });
  });
};

exports.deleteUpdate = (req, res) => {
  const id = req.params.id;
  orphanUpdatesModel.deleteUpdate(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Update deleted' });
  });
};
