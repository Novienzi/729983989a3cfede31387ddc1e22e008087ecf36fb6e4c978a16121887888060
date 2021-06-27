const mysql = require('mysql')

const dbConn = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
})

dbConn.query('SELECT "Database connected!" result', (err, result) => {
    // result diatas untuk alias (nama key)
    if (err) {
        console.log(err);
    }
    console.log(result[0].result);
    // result berupa array yang berisi object.
})

module.exports = dbConn