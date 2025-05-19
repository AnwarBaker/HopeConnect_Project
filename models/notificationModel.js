const db = require('../database');

exports.getAllNotifications = (callback) => {
  const sql = `
    SELECT notifications.*, users.username
    FROM notifications
    LEFT JOIN users ON notifications.user_id = users.id
  `;
  db.query(sql, callback);
};

exports.addNotification = (data, callback) => {
  const sql = `INSERT INTO notifications (user_id, message) VALUES (?, ?)`;
  db.query(sql, data, callback);
};

exports.deleteNotification = (id, callback) => {
  db.query('DELETE FROM notifications WHERE id = ?', [id], callback);
};
