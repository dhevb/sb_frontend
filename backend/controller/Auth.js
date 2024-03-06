const mysql = require('mysql2/promise');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const randomstring=require('randomstring');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'swadeshi',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Nodemailer transporter using SMTP
const transporter = nodemailer.createTransport({
host: 'smtp.gmail.com',
port:587,
  auth: {
    user: "holisticeducation052021@gmail.com",
    pass: "girp yqus ccja ntow"
  }
});

exports.verifyToken = (req, res, next) => {
  // Get token from cookies or headers
  const token = req.cookies.token || req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  // Verify token
  jwt.verify(token, '123@js5ef', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    req.userId = decoded.id; // Attach user ID to the request object for future use
    next(); // Move to the next middleware
  });
};


exports.createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10); // Hash the password
    const connection = await pool.getConnection();
    const [results, fields] = await connection.execute('INSERT INTO users (email, password, role) VALUES (?, ?, ?)', [req.body.email, hashedPassword, req.body.role]);
    connection.release();
    
    // Generate JWT token
    const token = jwt.sign({ id: results.insertId, role: results.role }, 'q#P6v@6nTw9u%4Z@2yG!S$e&8Lp3F@Rb');
    
    // Set token in cookie
    res.cookie('token', token, { httpOnly: true });
    
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
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password); // Compare hashed password
    if (isPasswordValid) {
      // Generate JWT token
      const token = jwt.sign({ id: user.id, role: user.role }, '123@js5ef');
      
      // Set token in cookie
      res.cookie('token', token, { httpOnly: true });
      
      res.status(200).json({ id: user.id, role: user.role });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error('Error logging in user:', err);
    res.status(400).json({ message: 'Error logging in user' });
  }
};

exports.forgotPassword = async (req, res) => {
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

    // Update user's hashed password in the database
    const hashedTempPassword = await bcrypt.hash(tempPassword, 10);
    await connection.execute('UPDATE users SET password = ? WHERE id = ?', [hashedTempPassword, user.id]);

    // Send reset password email
    const mailOptions = {
      from: 'holisticeducation052021@gmail.com', // Replace with your sender email
      to: req.body.email,
      subject: 'Password Reset',
      text: `Your temporary password is: ${tempPassword}. Please use this to login and reset your password.`,
    };

    transporter.sendMail(mailOptions, function(error, info) {
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
