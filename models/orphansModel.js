const db = require('../database');

// Get all orphans
exports.getAllOrphans = (callback) => {
  db.query('SELECT * FROM orphans', callback);
};

// Add orphan
exports.addOrphan = (data, callback) => {
  const sql = `
    INSERT INTO orphans (full_name, age, gender, education_status, health_condition, photo_url)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.query(sql, data, callback);
};

// Update orphan
exports.updateOrphan = (data, id, callback) => {
  const sql = `
    UPDATE orphans SET full_name = ?, age = ?, gender = ?, education_status = ?, health_condition = ?, photo_url = ?
    WHERE id = ?
  `;
  db.query(sql, [...data, id], callback);
};

// Delete orphan
exports.deleteOrphan = (id, callback) => {
  db.query('DELETE FROM orphans WHERE id = ?', [id], callback);
};

// Get public info
exports.getPublicOrphans = (callback) => {
  const sql = 'SELECT id, full_name, age, photo_url FROM orphans';
  db.query(sql, callback);
};
