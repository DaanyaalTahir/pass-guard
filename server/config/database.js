const mysql = require("mysql2");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "passguard",
});

module.exports = db;
