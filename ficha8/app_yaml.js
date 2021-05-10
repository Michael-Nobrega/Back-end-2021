//importar o express
const { request, response } = require('express');
const express = require('express');
var mysql = require('mysql');

//instanciar o express
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

//definiar  a porta do servidor http
const port = 3000;

//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'persons'
})

//get
app.get('/persons', (request, response) => {
    dbConnection.query("SELECT * FROM persons", function (error, results, fields){
        if(error){
            response.status(404);
            response.end(error.message)
          }
        response.send(results);
        if(results == 0){
            response.status(404);
            response,send("ID NOT FOUND");
        }
        else{
            response.send(results);
        }
    });
});

//post
app.post('/persons' , (request, response) => {
    var details = request.body;
    dbConnection.query('INSERT INTO persons set ?',[details], (error, results, fields) => {
        if(error){
            response.status(404);
            response.end(error.message)
          }
        response.send("Inserted ID's" + results);
    });
});

//delete
app.delete('/persons:id', (request, response) => {
    var id = request.params.id;

    dbConnection.query("Delete FROM persons WHERE ID" + id, (error, results, fields) => {
        if (error) {
            response.status(404);
            response.end(error.message);
          }
        response.send("Deleted " + results.affecterRows + " entry(s)");
    });
});

//swagger endpoint path
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//metodo que arranca o servidor http e fica a escuta
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
