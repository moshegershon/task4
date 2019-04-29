const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const PORT = 1212;
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tasks'
});

app.post('/add', function (req, res) {
    console.log(1)
    connection.connect(function (err, d) {
        let data = {}
        data = req.body;
        console.log(data);
        connection.query('INSERT INTO `task` SET ?', data, function (error, results, fields) {
            if (error) {
                console.log(error.sql)
            }
            res.end('ok');

        })

    });
});

app.get('/tasks', function (req, res) {
    connection.connect(function (err, d) {
        connection.query('SELECT * FROM `task`', function (error, results, fields) {
            if (error) {
                console.log(error.sql)
            }
            console.log(results);
            res.send(results)
        });
    });
});
app.get('/siblings', function (req, res) {
    connection.connect(function (err, d) {
        connection.query('SELECT * FROM `siblings`', function (error, results, fields) {
            if (error) {
                console.log(error.sql)
            }
            console.log(results);
            res.send(results)
        });
    });
});

app.listen(PORT, function () {
    console.log('connected')
});