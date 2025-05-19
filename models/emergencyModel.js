const db = require('../database');

exports.getAll = (callback) => {
  db.query('SELECT * FROM emergency_campaigns', callback);
};

exports.add = (data, callback) => {
  const sql = `INSERT INTO emergency_campaigns (title, description, start_date, end_date) VALUES (?, ?, ?, ?)`;
  db.query(sql, data, callback);
};

exports.update = (data, id, callback) => {
  const sql = `UPDATE emergency_campaigns SET title = ?, description = ?, start_date = ?, end_date = ? WHERE id = ?`;
  db.query(sql, [...data, id], callback);
};

exports.delete = (id, callback) => {
  db.query('DELETE FROM emergency_campaigns WHERE id = ?', [id], callback);
};
