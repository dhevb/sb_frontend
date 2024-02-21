const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'swadeshi',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

exports.createUser = async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [result, fields] = await connection.execute('INSERT INTO users (email, password, role) VALUES (?, ?, ?)', [req.body.email, req.body.password, req.body.role]);
    connection.release();
    res.status(201).json({ id: result.insertId, role: req.body.role });
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(400).json({ message: 'Error creating user' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [results, fields] = await connection.execute('SELECT * FROM users WHERE email = ?', [req.body.email]);
    connection.release();

    if (results.length === 0) {
      res.status(401).json({ message: 'No user found with this email' });
      return;
    }

    const user = results[0];
    if (user.password === req.body.password) {
      res.status(200).json({ id: user.id, role: user.role });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error('Error logging in user:', err);
    res.status(400).json({ message: 'Error logging in user' });
  }
};
