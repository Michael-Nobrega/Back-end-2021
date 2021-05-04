//importar o swaggerJsDoc e swaggerUi
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Ficha 8 API",
            description: "Ficha 8 API Information",
            contact: {
                name: "TPSI-DWB"
            },
            servers: ["https://localhost:3000"]
        },
        definitions: {
            "Person": {
                "type": "object",
                "proprieties": {
                    "id": {
                        "type": "integer",
                        "x-primary-key": true
                    },
                    "firstname": {
                        "type": "string"
                    },
                    "lastname": {
                        "type": "string"
                    },
                    "profession": {
                        "type": "string"
                    },
                    "age": {
                        "type": "integer",
                        "format": "int64"
                    }
                }
            }
        },
    },
    apis: ["app.js"]
};



//importar o express
const { request, response } = require('express');
const express = require('express');
var mysql = require('mysql');

//instanciar o express
const app = express();

//swagger endpoint path
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


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

/**
 * @swagger
 * /persons:
 *    get:
 *      tags:
 *        - Persons
 *      summary: Gets a list of persons
 *      description: Returns a list of persons
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: An array of persons
 *              schema:
 *                  $ref: '#/definitions/Person'
 */

app.get('/persons', (request, response) => {
    dbConnection.query("SELECT * FROM persons", function (error, results, fields) {
        if(error) {
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

/**
 *  @swagger
 * /persons:
 *    post:
 *      tags:
 *        - Persons
 *      summary: Creates and stores a person
 *      description: Returns the ID of the created person
 *      produces:
 *          - application/json
 *      parameters:
 *             
 *      responses:
 *          200:
 *              description: An array of persons
 *              schema:
 *                  $ref: '#/definitions/Person'
 */

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


//metodo que arranca o servidor http e fica a escuta
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});



