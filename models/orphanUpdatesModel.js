const db = require('../database');

exports.getAllUpdates = (callback) => {
  const sql = `
    SELECT orphan_updates.*, orphans.full_name AS orphan_name
    FROM orphan_updates
    JOIN orphans ON orphan_updates.orphan_id = orphans.id
  `;
  db.query(sql, callback);
};

exports.addUpdate = (data, callback) => {
  const sql = `INSERT INTO orphan_updates (orphan_id, update_text, photo_url) VALUES (?, ?, ?)`;
  db.query(sql, data, callback);
};

exports.updateUpdate = (data, id, callback) => {
  const sql = `UPDATE orphan_updates SET orphan_id = ?, update_text = ?, photo_url = ? WHERE id = ?`;
  db.query(sql, [...data, id], callback);
};

exports.deleteUpdate = (id, callback) => {
  db.query('DELETE FROM orphan_updates WHERE id = ?', [id], callback);
};
