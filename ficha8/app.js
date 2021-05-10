//importar o swaggerJsDoc e swaggerUi
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

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
            "Persons": {
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
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
 *                  $ref: '#/definitions/Persons'
 */

app.get('/persons', (request, response) => {
    dbConnection.query("SELECT * FROM persons", function (error, results, fields) {
        if(error) {
            response.status(404);
            response.end(error.message)
          }
            response.send(results);

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
 *             - name: Model
 *               description: Sample person
 *               in: body
 *               required: true
 *               schema:
 *                  $ref: '#/definitions/Persons'
 *      responses:
 *          200:
 *              description: An array of persons
 */

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
 *    delete:
 *      tags:
 *        - Persons
 *      summary: Deletes a single a person by ID
 *      description: Deletes a single person by ID
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: id
 *            Description: Person's ID
 *            in: body
 *            required: true
 *            type: string         
 *      responses:
 *          200:
 *              description: Sucessfully deleted
 */

/**
 *  @swagger
 * /persons/{id}:
 *    delete:
 *      tags:
 *        - Persons
 *      summary: Deletes a single a person by ID
 *      description: Deletes a single person by ID
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: id
 *            Description: Person's ID
 *            in: path
 *            required: true
 *            type: string         
 *      responses:
 *          200:
 *              description: Sucessfully deleted
 */

app.delete('/persons/:id', (request, response) => {
    var id = request.params.id;
    dbConnection.query("Delete FROM persons WHERE ID=" + id, (error, results, fields) => {
        if (error) {
            response.status(404);
            response.end(error.message);
          }
        response.send("Deleted " + results.affectedRows + " entry(s)");
    });
});

/**
 *  @swagger
 * /persons/{id}:
 *    put:
 *      tags:
 *        - Persons
 *      summary: Updates and stores a person
 *      description: Returns the id of the updated person
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: id
 *            Description: Person's ID
 *            in: path
 *          - name: Model
 *            description: Sample person
 *            in: body
 *            required: true
 *            schema:
 *              $ref: '#/definitions/Persons'
 *      responses:
 *          200:
 *              description: Successfull
 */


//metodo que arranca o servidor http e fica a escuta
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});



