const db = require('../database');

exports.getAllAssignments = (callback) => {
  const sql = `
    SELECT volunteer_assignments.*, volunteers.full_name AS volunteer_name
    FROM volunteer_assignments
    JOIN volunteers ON volunteer_assignments.volunteer_id = volunteers.id
  `;
  db.query(sql, callback);
};

exports.addAssignment = (data, callback) => {
  const sql = `INSERT INTO volunteer_assignments (volunteer_id, task_description, assigned_date, status) VALUES (?, ?, ?, ?)`;
  db.query(sql, data, callback);
};

exports.updateAssignment = (data, id, callback) => {
  const sql = `UPDATE volunteer_assignments SET volunteer_id = ?, task_description = ?, assigned_date = ?, status = ? WHERE id = ?`;
  db.query(sql, [...data, id], callback);
};

exports.deleteAssignment = (id, callback) => {
  db.query('DELETE FROM volunteer_assignments WHERE id = ?', [id], callback);
};
