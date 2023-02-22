const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');

const router = express.Router();

dotenv.config({ path: './.env' });

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['access-token-cats'];

    if (!authHeader || authHeader !== process.env.SECRET_TOKEN) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    next();
}


// POST /cats - create cat
router.post('/cats', authenticateToken, (req, res) => {
    const { name, age, breed } = req.body;

    pool.query('INSERT INTO cats (name, age, breed) VALUES (?, ?, ?)', [name, age, breed], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Cat created successfully', id: result.insertId });
    });
});

module.exports = router;