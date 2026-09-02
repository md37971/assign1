const express = require("express");
const mysql = require("mysql2")

const app = express();

const pool = mysql.createPool({
  host: "localhost",
  user: "csce41333user",
  password: "csce41333pass",
  database: "assign1",
  connectionLimit: 5,
});

//*** Middleware */
app.use(express.json());
app.use(express.static('public'));

//** Web API */
app.get("/users", function (req, res) {
  const sql = "SELECT * FROM users";
  pool.execute(sql, function (err, result, fields) {
    res.json(result);
  });
});

//Second task, make it to where it posts the data.
//Download Bruno (usebruno.com) to make http requests.


app.listen(3000, function () {
  console.log("Listening on port 3000..");
});
