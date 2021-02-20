const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'antero',
  password: 'kakka123',
  database: 'internetohjelmointi'
});
module.exports = connection;