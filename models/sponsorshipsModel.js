const db = require('../database');

exports.getAllSponsorships = (callback) => {
  const sql = `
    SELECT sponsorships.*, orphans.full_name AS orphan_name
    FROM sponsorships
    JOIN orphans ON sponsorships.orphan_id = orphans.id
  `;
  db.query(sql, callback);
};

exports.addSponsorship = (data, callback) => {
  const sql = `INSERT INTO sponsorships (orphan_id, sponsor_name, monthly_amount, status) VALUES (?, ?, ?, ?)`;
  db.query(sql, data, callback);
};

exports.updateSponsorship = (data, id, callback) => {
  const sql = `UPDATE sponsorships SET orphan_id = ?, sponsor_name = ?, monthly_amount = ?, status = ? WHERE id = ?`;
  db.query(sql, [...data, id], callback);
};

exports.deleteSponsorship = (id, callback) => {
  db.query('DELETE FROM sponsorships WHERE id = ?', [id], callback);
};
