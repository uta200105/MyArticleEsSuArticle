var mysql = require('mysql');
var connection = mysql.createConnection({
  port: '3306',
  host: 'localhost',
  user: '',
  password: ''
});

connection.connect(function(err) {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  } else {
    console.log('connected as id ' + connection.threadId);
  }
});

module.exports = connection;