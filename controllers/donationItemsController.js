
const donationItemsModel = require('../models/donationItemsModel');

exports.getAllItems = (req, res) => {
  donationItemsModel.getAllItems((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.addItem = (req, res) => {
  const data = [req.body.donation_id, req.body.item_name, req.body.quantity];
  donationItemsModel.addItem(data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Donation item added', id: result.insertId });
  });
};

exports.updateItem = (req, res) => {
  const id = req.params.id;
  const data = [req.body.donation_id, req.body.item_name, req.body.quantity];
  donationItemsModel.updateItem(data, id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Donation item updated' });
  });
};

exports.deleteItem = (req, res) => {
  const id = req.params.id;
  donationItemsModel.deleteItem(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Donation item deleted' });
  });
};

