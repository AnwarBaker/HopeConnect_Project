const db = require('../database');

exports.matchEmergenciesWithVolunteers = (callback) => {
  const sql = `
    SELECT 
    e.id AS emergency_id,
    e.description,
    e.required_skill,
    JSON_ARRAYAGG(
        JSON_OBJECT(
            'volunteer_id', v.id,
            'full_name', v.full_name,
            'phone', v.phone,
            'skill_name', vs.skill_name
        )
    ) AS volunteers
FROM emergencies e
JOIN volunteer_skills vs ON e.required_skill = vs.skill_name
JOIN volunteers v ON vs.volunteer_id = v.id
GROUP BY e.id;
;
  `;
  db.query(sql, callback);
};
