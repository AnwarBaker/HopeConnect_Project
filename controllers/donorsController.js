

const donorModel = require('../models/donorModel');

exports.getAllDonors = (req, res) => {
  donorModel.getAllDonors((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.addDonor = (req, res) => {
  const data = [req.body.full_name, req.body.phone, req.body.address];

  donorModel.addDonor(data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Donor added', id: result.insertId });
  });
};

