const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 5555;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'classrooms'
});

app.use(express.json());

app.post('/rooms', (req, res) => {
  const { name, capacity, availableTimes } = req.body;
  db.query('INSERT INTO rooms (name, capacity, availableTimes) VALUES (?, ?, ?)', [name, capacity, availableTimes], (err, result) => {
    if (err) throw err;
    res.send('classroom added');
  });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
