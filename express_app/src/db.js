require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_localhost,
    port: process.env.DB_5177,
    user: process.env.DB_harry,
    password: process.env.DB_potter,
    database: process.env.DB_kaamelott,
});

module.exports = connection;

