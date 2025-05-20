
const sponsorshipsModel = require('../models/sponsorshipsModel');

exports.getAllSponsorships = (req, res) => {
  sponsorshipsModel.getAllSponsorships((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.addSponsorship = (req, res) => {
  const data = [req.body.orphan_id, req.body.sponsor_name, req.body.monthly_amount, req.body.status];

  sponsorshipsModel.addSponsorship(data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Sponsorship added', id: result.insertId });
  });
};

exports.updateSponsorship = (req, res) => {
  const id = req.params.id;
  const data = [req.body.orphan_id, req.body.sponsor_name, req.body.monthly_amount, req.body.status];

  sponsorshipsModel.updateSponsorship(data, id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Sponsorship updated' });
  });
};

exports.deleteSponsorship = (req, res) => {
  const id = req.params.id;
  sponsorshipsModel.deleteSponsorship(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Sponsorship deleted' });
  });
};
