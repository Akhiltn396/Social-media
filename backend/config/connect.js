const mysql = require("mysql");

const db = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"Mysqlkilledi78@90",
    database:"social"
})
module.exports = db