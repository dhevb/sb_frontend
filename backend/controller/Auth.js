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
    const [results, fields] = await connection.execute('INSERT INTO users (email, password, role) VALUES (?, ?, ?)', [req.body.email, req.body.password, req.body.role]);
    connection.release();
    res.status(201).json({ id: results.insertId, role: results.role });
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


const nodemailer = require('nodemailer');

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'kandarisonal21200@gmail.com', // Your Gmail email address
    pass: 'Sonal21200@', // Your Gmail password
  },
});

exports.F
forgotPassword = async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [results, fields] = await connection.execute('SELECT * FROM users WHERE email = ?', [req.body.email]);
    connection.release();

    if (results.length === 0) {
      res.status(404).json({ message: 'No user found with this email' });
      return;
    }

    const user = results[0];

    // Generate a random temporary password
    const tempPassword = Math.random().toString(36).slice(-8);

    // Update user's password in the database
    await connection.execute('UPDATE users SET password = ? WHERE id = ?', [tempPassword, user.id]);

    // Send reset password email
    const mailOptions = {
      from: 'kandarisonal21200@gmail.com',
      to: req.body.email,
      subject: 'Password Reset',
      text: `Your temporary password is: ${tempPassword}. Please use this to login and reset your password.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email' });
      } else {
        console.log('Reset password email sent:', info.response);
        res.status(200).json({ message: 'Reset password email sent' });
      }
    });
  } catch (err) {
    console.error('Error resetting password:', err);
    res.status(400).json({ message: 'Error resetting password' });
  }
};