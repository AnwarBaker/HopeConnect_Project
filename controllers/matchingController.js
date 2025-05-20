
const matchingModel = require('../models/matchingModel');

exports.matchEmergenciesWithVolunteers = (req, res) => {
  matchingModel.matchEmergenciesWithVolunteers((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: "No matches found." });
    res.json(results);
  });
};
