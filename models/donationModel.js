const db = require('../database');

exports.getAllDonations = (callback) => {
  const sql = `
    SELECT donations.*, donors.full_name AS donor_name
    FROM donations
    LEFT JOIN donors ON donations.donor_id = donors.id
  `;
  db.query(sql, callback);
};

exports.addDonation = (data, callback) => {
  const sql = `INSERT INTO donations (donor_id, donation_type, amount, status) VALUES (?, ?, ?, ?)`;
  db.query(sql, data, callback);
};
