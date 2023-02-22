const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');


const postCatData = require("./controller/postCatData")
const putCatData = require("./controller/putCatData")
const getCatData = require("./controller/getCatData")
const deleteCatData = require("./controller/deleteCatData")



const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(postCatData)
app.use(putCatData)
app.use(getCatData)
app.use(deleteCatData)




dotenv.config({ path: './.env' });

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connected to Database");

    //Create cat table if it does't exist.
    connection.query("CREATE TABLE IF NOT EXISTS cats ( id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255) NOT NULL, age INT NOT NULL, breed VARCHAR(255) NOT NULL, PRIMARY KEY (id))", (err) => {
        if (err) throw err;
        console.log('cats table created');
    });

    connection.release();
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}) 