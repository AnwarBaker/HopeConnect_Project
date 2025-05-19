
const donationModel = require('../models/donationModel');

exports.getAllDonations = (req, res) => {
  donationModel.getAllDonations((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.addDonation = (req, res) => {
  const data = [req.body.donor_id, req.body.donation_type, req.body.amount, req.body.status];

  donationModel.addDonation(data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Donation added', id: result.insertId });
  });
};
