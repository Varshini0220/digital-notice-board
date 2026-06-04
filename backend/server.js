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
  database: 'DigitalNoticeDB',// <-- your database name
  password: 'Varshini@02',        // replace with your actual password
  port: 5432,
});

// ------------------- STARTUP CHECKS -------------------
async function checkTables() {
  try {
    const notices = await pool.query('SELECT * FROM dnb."Notices" LIMIT 1');
    console.log('Notices check:', notices.rows);

    const categories = await pool.query('SELECT * FROM dnb."Categories" LIMIT 1');
    console.log('Categories check:', categories.rows);

    const students = await pool.query('SELECT * FROM dnb."Students" LIMIT 1');
    console.log('Students check:', students.rows);

    const subs = await pool.query('SELECT * FROM dnb."Subscriptions" LIMIT 1');
    console.log('Subscriptions check:', subs.rows);

    const logs = await pool.query('SELECT * FROM dnb."ReadLogs" LIMIT 1');
    console.log('ReadLogs check:', logs.rows);
  } catch (err) {
    console.error('Error checking tables:', err);
  }
}
checkTables();

// ------------------- ROUTES -------------------

// Notices
app.get('/api/notices', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM dnb."Notices"');
    res.json(result.rows);
  } catch (err) {
    console.error('Error in /api/notices:', err);
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
    console.error('Error inserting notice:', err);
    res.status(500).send('Server Error');
  }
});

// Categories
app.get('/api/categories', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM dnb."Categories"');
    res.json(result.rows);
  } catch (err) {
    console.error('Error in /api/categories:', err);
    res.status(500).send('Server Error');
  }
});

// Students
app.get('/api/students', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM dnb."Students"');
    res.json(result.rows);
  } catch (err) {
    console.error('Error in /api/students:', err);
    res.status(500).send('Server Error');
  }
});

// Subscriptions
app.get('/api/subscriptions', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM dnb."Subscriptions"');
    res.json(result.rows);
  } catch (err) {
    console.error('Error in /api/subscriptions:', err);
    res.status(500).send('Server Error');
  }
});

// ReadLogs
app.get('/api/readlogs', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM dnb."ReadLogs"');
    res.json(result.rows);
  } catch (err) {
    console.error('Error in /api/readlogs:', err);
    res.status(500).send('Server Error');
  }
});

// ------------------- START SERVER -------------------
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
