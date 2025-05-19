const orphanModel = require('../models/orphansModel');

// GET all orphans
exports.getAllOrphans = (req, res) => {
  orphanModel.getAllOrphans((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// POST new orphan
exports.addOrphan = (req, res) => {
  const { full_name, age, gender, education_status, health_condition, photo_url } = req.body;
  const data = [full_name, age, gender, education_status, health_condition, photo_url];

  orphanModel.addOrphan(data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Orphan added', id: result.insertId });
  });
};

// PUT update orphan
exports.updateOrphan = (req, res) => {
  const id = req.params.id;
  const { full_name, age, gender, education_status, health_condition, photo_url } = req.body;
  const data = [full_name, age, gender, education_status, health_condition, photo_url];

  orphanModel.updateOrphan(data, id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Orphan updated' });
  });
};

// DELETE orphan
exports.deleteOrphan = (req, res) => {
  const id = req.params.id;

  orphanModel.deleteOrphan(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Orphan deleted' });
  });
};

// GET public orphans
exports.getAllOrphansPublic = (req, res) => {
  orphanModel.getPublicOrphans((err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    const baseUrl = 'http://localhost:5000';
    const formatted = results.map(orphan => ({
      ...orphan,
      photo_url: orphan.photo_url.startsWith('http')
        ? orphan.photo_url
        : `${baseUrl}${orphan.photo_url}`
    }));

    res.json(formatted);
  });
};
