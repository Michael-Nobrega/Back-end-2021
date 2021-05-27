//importar o express
const { request, response } = require('express');
const express = require('express');
var mysql = require('mysql2');


//instanciar o express
const app = express();
//definiar  a porta do servidor http
const port = 3000;

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const Sequelize = require('sequelize');

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

//Conectar e autentica á base de dados usando o sequelize
const sequelize = new Sequelize('ficha9', 'root', '', {
    dialect: 'mysql'
});

    sequelize.authenticate()
        .then(() => {
            console.log("Connection has been established");
        })
        .catch(err => {
            console.error("Unable to connect", err);
        });

//Defenir o modelo

const Person = sequelize.define('Person', {
    //atributos
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        //allowNull DEFAULTS to true
    },
    profession: {
        type: Sequelize.STRING,
    },
    age: {
        type: Sequelize.INTEGER,
    }
}, {
    //options
});


//Syncronizar os modelos com a base de dados
sequelize.sync({ force : false })
    .then(() => {
        console.log('Database and tables created');
    }) .then(function () {
        return Person.findAll ();
    }) .then(function (persons) {
        console.log(persons);
    });

/*Person.bulkCreate([
            { firstName: 'Pedro', lastName: 'Jardim', profession: 'IT', age:62 },
            { firstName: 'Manuel', lastName: 'Matos', profession: 'IT', age:12 },
            { firstName: 'Maria', lastName: 'Figueira', profession: 'IT', age:32 },
            { firstName: 'Ana', lastName: 'Duarte', profession: 'IT', age:82 },
            { firstName: 'Luis', lastName: 'Faria', profession: 'IT', age:42 }

]) .then(function () {
    return Person.findAll();
}) .then(function (persons) {
    console.log(persons);
});*/


//Listar todas as pessoas existentes (a)
app.get('/person', (request, response) => {    
    Person.findAll().then(persons => {
        response.send(persons);
    })
});




//Adicionar uma nova pessoa (b)
app.post('/person', (request, response) => {
    var details = request.body;
    Person.create(details).then(person => {
        response.send("" + person.id);
    })
});





//apagar uma pessoa por ID (c)
app.delete('/person', (request, response) => {
Person.destroy({
    where: {
        id: request.body.id
    }
}).then(count => {
    if (!count){
        return response.status(404).send({error:'User does not exist'})
    }
    response.status(204).send("" + count + "was deleted");
    })
});





//apagar um user por parametro/id (d) 
app.delete('/person/:id', (request, response) =>{
    Person.destroy({
        where: {
            id: request.params.id
        }
    }).then(count => {
        if (!count) {
            return response.status(404).send({error: 'User non existent'});
        }
        response.status(204).send("" + count + "was deleted");
    }).catch(err => {
        return response.status(300).send(err)
    });
});
//apagar uma pessoa por ID (d)
/*app.delete('/persons/:id', (request, response) => {
    var id = request.params.id;
    Person.destroy(id).then(person =>{
        response.send("ID" + person.id + "Was Deleted");
    })
});*/

//products
//products
//products/:productid
//products/:productid/update
//products/:productid/incrementviews
//products/:productid/delete
//products/:sellerid/products



//Encontra um user por parametro/id (e)
app.get('/person', (request, response) =>{
    Person.findAll({
        where: {
            id: request.query.id
        }
    }).then(count => {
        if (!count) {
            return response.status(404).send({error: 'User non existent'});
        }
        response.status(204).send();
    });
});






//Encontra um user por parametro/age + profession
app.get('/person-find/:age/:profession', (request, response) =>{
    Person.findAll({
        where: {
            age: request.params.age,
            profession: request.params.profession
        }
    }).then(count => {
        if (!count) {
            return response.status(404).send({error: 'User non existent'});
        }
        response.status(204).send();
    });
});

