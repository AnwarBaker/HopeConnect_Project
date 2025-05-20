const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

const newUsers = [
  { username: 'donor', email: 'donor@example.com', password: '123456', role: 'donor' },
  { username: 'volunteer', email: 'volunteer@example.com', password: '12345', role: 'volunteer' },
  { username: 'admin', email: 'admin@example.com', password: '1234567', role: 'admin' },
  { username: 'coordinator', email: 'coordinator@example.com', password: '12345678', role: 'coordinator' }
];

(async () => {
  for (let newUser of newUsers) {
    const hashedPassword = await bcrypt.hash(newUser.password, 10);

    const sql = `INSERT INTO users (username, email, password_hash, role_name) VALUES (?, ?, ?, ?)`;
    db.query(sql, [newUser.username, newUser.email, hashedPassword, newUser.role], (err, result) => {
      if (err) return console.error('❌ Error:', err.message);
      console.log('✅ User created with ID:', result.insertId);
    });
  }

  // Closing connection after all queries are completed
  db.end();
})();
