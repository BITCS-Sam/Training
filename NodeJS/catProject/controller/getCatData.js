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



// GET /cats - list of cats (pagination)
router.get('/cats', authenticateToken, (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    pool.query('SELECT * FROM cats LIMIT ?, ?', [offset, limit], (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});

// GET /cats/search?age_lte=10&age_gte=20 - cat with given age range
router.get('/cats/search', authenticateToken, (req, res) => {
    const age_lte = parseInt(req.query.age_lte) || 0;
    const age_gte = parseInt(req.query.age_gte) || 0;

    pool.query('SELECT * FROM cats WHERE age >= ? AND age <= ?', [age_gte, age_lte], (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});

// GET /cats/:id - cat with given ID
router.get('/cats/:id', authenticateToken, (req, res) => {
    const id = req.params.id;

    pool.query('SELECT * FROM cats WHERE id = ?', [id], (err, rows) => {
        if (err) throw err;
        if (rows.length === 0) {
            res.status(404).json({ message: 'Cat not found' });
        } else {
            res.json(rows[0]);
        }
    });
});



module.exports = router;