const db = require('../database');

exports.getAllVolunteers = (callback) => {
  db.query('SELECT * FROM volunteers', callback);
};

exports.addVolunteer = (data, callback) => {
  const sql = `INSERT INTO volunteers (full_name, email, phone, location, availability) VALUES (?, ?, ?, ?, ?)`;
  db.query(sql, data, callback);
};

exports.updateVolunteer = (data, id, callback) => {
  const sql = `UPDATE volunteers SET full_name = ?, email = ?, phone = ?, location = ?, availability = ? WHERE id = ?`;
  db.query(sql, [...data, id], callback);
};

exports.deleteVolunteer = (id, callback) => {
  db.query('DELETE FROM volunteers WHERE id = ?', [id], callback);
};

exports.getVolunteersBySkill = (skill, callback) => {
  const sql = `
    SELECT v.id, v.full_name, v.phone, s.skill_name
    FROM volunteers v
    JOIN volunteer_skills s ON v.id = s.volunteer_id
    WHERE s.skill_name = ?
  `;
  db.query(sql, [skill], callback);
};
