const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// PostgreSQL connection (database only)
const pool = new Pool({
  user: 'postgres',                // pgAdmin username
  host: 'localhost',               // database server
  database: 'digital_notice_board',// <-- your database name
  password: 'Varshini@02',        // replace with your actual password
  port: 5432,                      // default PostgreSQL port
});

// Test DB connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('DB connection error:', err);
  } else {
    console.log('DB connected at:', res.rows[0].now);
  }
});

// ------------------- ROUTES -------------------

// Notices
app.get('/api/notices', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM dnb."Notices"');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.post('/api/notices', async (req, res) => {
  const { title, content, categoryId, expiresAt } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO dnb."Notices" (title, content, categoryId, expiresAt) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, content, categoryId, expiresAt]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Categories
app.get('/api/categories', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM dnb."Categories"');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Students
app.get('/api/students', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM dnb."Students"');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Subscriptions
app.get('/api/subscriptions', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM dnb."Subscriptions"');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// ReadLogs
app.get('/api/readlogs', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM dnb."ReadLogs"');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// ------------------- START SERVER -------------------
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
