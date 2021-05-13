//importar o express
//
const { request, response } = require('express');
const express = require('express');
var mysql = require('mysql2');

//instanciar o express
const app = express();
//definiar  a porta do servidor http
const port = 3000;

//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ficha9'
})

//metodo que arranca o servidor http e fica a escuta
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});