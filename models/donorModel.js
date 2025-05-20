const db = require('../database');

exports.getAllDonors = (callback) => {
  db.query('SELECT * FROM donors', callback);
};

exports.addDonor = (data, callback) => {
  const sql = `INSERT INTO donors (full_name, phone, address) VALUES (?, ?, ?)`;
  db.query(sql, data, callback);
};
