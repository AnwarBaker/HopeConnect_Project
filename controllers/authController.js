
const authModel = require('../models/authModel');

exports.login = (req, res) => {
  const { username, password } = req.body;
  authModel.login(username, password, (err, response) => {
    if (err) return res.status(401).json(err);
    res.json(response);
  });
};

