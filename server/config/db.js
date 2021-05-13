const mysql = require('mysql2')

const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE
})

connection.connect(); //연결실행
module.exports = connection;