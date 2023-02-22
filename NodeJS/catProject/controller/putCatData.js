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


// PUT /cats/:id - update cat with given ID
router.put('/cats/:id', authenticateToken, (req, res) => {
    const id = req.params.id;
    const { name, age, breed } = req.body;

    pool.query('UPDATE cats SET name = ?, age = ?, breed = ? WHERE id = ?', [name, age, breed, id], (err, result) => {
        if (err) throw err;
        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Cat not found' });
        } else {
            res.json({ message: 'Cat updated successfully' });
        }
    });
});



module.exports = router;