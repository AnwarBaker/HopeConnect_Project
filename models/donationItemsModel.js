const db = require('../database');

exports.getAllItems = (callback) => {
  const sql = `
    SELECT donation_items.*, donors.full_name AS donor_name
    FROM donation_items
    JOIN donations ON donation_items.donation_id = donations.id
    JOIN donors ON donations.donor_id = donors.id
  `;
  db.query(sql, callback);
};

exports.addItem = (data, callback) => {
  const sql = `INSERT INTO donation_items (donation_id, item_name, quantity) VALUES (?, ?, ?)`;
  db.query(sql, data, callback);
};

exports.updateItem = (data, id, callback) => {
  const sql = `UPDATE donation_items SET donation_id = ?, item_name = ?, quantity = ? WHERE id = ?`;
  db.query(sql, [...data, id], callback);
};

exports.deleteItem = (id, callback) => {
  db.query('DELETE FROM donation_items WHERE id = ?', [id], callback);
};
