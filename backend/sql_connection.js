var mysql = require('mysql');
require('dotenv').config();

var con = mysql.createConnection({
  host: process.env.DB_HOST, 
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
});

const getJson = async() => {
  try{
  con.connect();
  if (err) throw err;
  con.query("SELECT * FROM StorieTable", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    return result
  }
}
}