const db = require('../database');

exports.getAllFeedback = (callback) => {
  const sql = `
    SELECT feedback.*, users.username
    FROM feedback
    LEFT JOIN users ON feedback.user_id = users.id
  `;
  db.query(sql, callback);
};

exports.addFeedback = (data, callback) => {
  const sql = `INSERT INTO feedback (user_id, feedback_text) VALUES (?, ?)`;
  db.query(sql, data, callback);
};

exports.deleteFeedback = (id, callback) => {
  db.query('DELETE FROM feedback WHERE id = ?', [id], callback);
};
