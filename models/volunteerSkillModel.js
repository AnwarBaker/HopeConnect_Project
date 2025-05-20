const db = require('../database');

exports.getAllSkills = (callback) => {
  const sql = `
    SELECT volunteer_skills.*, volunteers.full_name AS volunteer_name
    FROM volunteer_skills
    JOIN volunteers ON volunteer_skills.volunteer_id = volunteers.id
  `;
  db.query(sql, callback);
};

exports.addSkill = (data, callback) => {
  const sql = `INSERT INTO volunteer_skills (volunteer_id, skill_name) VALUES (?, ?)`;
  db.query(sql, data, callback);
};

exports.updateSkill = (data, id, callback) => {
  const sql = `UPDATE volunteer_skills SET volunteer_id = ?, skill_name = ? WHERE id = ?`;
  db.query(sql, [...data, id], callback);
};

exports.deleteSkill = (id, callback) => {
  db.query('DELETE FROM volunteer_skills WHERE id = ?', [id], callback);
};
