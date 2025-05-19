
const notificationModel = require('../models/notificationModel');

exports.getAllNotifications = (req, res) => {
  notificationModel.getAllNotifications((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.addNotification = (req, res) => {
  const data = [req.body.user_id, req.body.message];

  notificationModel.addNotification(data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Notification sent', id: result.insertId });
  });
};

exports.deleteNotification = (req, res) => {
  const id = req.params.id;

  notificationModel.deleteNotification(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Notification deleted' });
  });
};
