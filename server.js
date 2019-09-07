const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;


const mysql = require('mysql');
// connect to api test db
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api'
});
 
// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/apiRoute.js'); //importing route
routes(app); //register the route

