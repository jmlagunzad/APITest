'user strict';

var mysql = require('mysql');


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'api'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to api DB!");
});

module.exports = connection;