const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
let a ='api/login'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'apnadabba'
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
  console
});

// API endpoint to handle form submission
app.post('/api/completeProfile', (req, res) => {
  const {
    name,
    gender,
    email,
    phoneNumber,
    otp,
    dob,
    password,
    rePassword,
  } = req.body;

  // Validate password match
  if (password !== rePassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  const sql =
    'INSERT INTO login (name, gender, email, phoneNumber, otp, dob, password) VALUES (?, ?, ?, ?, ?, ?, ?)';

  db.query(
    sql,
    [name, gender, email, phoneNumber, otp, dob, password],
    (err, result) => {
      if (err) {
        console.error('Error inserting into login table:', err);
        res.status(500).json({ error: 'Error creating profile' });
      } else {
        console.log('Profile created successfully');
        res.status(200).json({ message: 'Profile created successfully' });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
