
const feedbackModel = require('../models/feedbackModel');

exports.getAllFeedback = (req, res) => {
  feedbackModel.getAllFeedback((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.addFeedback = (req, res) => {
  const data = [req.body.user_id, req.body.feedback_text];

  feedbackModel.addFeedback(data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Feedback submitted', id: result.insertId });
  });
};

exports.deleteFeedback = (req, res) => {
  const id = req.params.id;
  
  feedbackModel.deleteFeedback(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Feedback deleted' });
  });
};
