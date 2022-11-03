var mysql = require('mysql');

var con = mysql.createConnection({
  host: '127.0.0.1',
  user: 'cpses_fuxd2je8g3@localhost',
  password:'',
  port: 3306,
  database:'funtiont_Stories'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});